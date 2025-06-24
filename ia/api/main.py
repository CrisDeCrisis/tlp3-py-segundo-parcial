from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib
from sklearn.metrics import classification_report

# Cargar el modelo
model = joblib.load("asteroid_model.pkl")
x_test, y_test = joblib.load("test_data.pkl")

# Inicializar la app
app = FastAPI(title="NEO Prediction API")

# Definir el modelo de datos de entrada
class AsteroidInput(BaseModel):
    absolute_magnitude: float
    eccentricity: float
    semimajor_axis: float
    perihelion: float
    inclination: float
    time_perihelion: float
    moid_ld: float

# Endpoint para predecir
@app.post("/predict")
def predict(data: AsteroidInput):
    X = np.array([[data.absolute_magnitude, data.eccentricity, data.semimajor_axis, data.perihelion, data.inclination, data.time_perihelion, data.moid_ld]])
    
    pred = model.predict(X)[0]
    prob = model.predict_proba(X)[0][1]

    return {
        "is_neo": int(pred),
        "probability_neo": round(prob, 3),
        "probability_no_neo": round(1 - prob, 3),
    }

# Endpoint para obtener métricas del modelo
@app.get("/metrics")
def get_metrics():
    y_pred = model.predict(x_test)
    report = classification_report(y_test, y_pred, output_dict=True)
    accuracy = model.score(x_test, y_test)

    return {
        "accuracy": round(accuracy, 3),
        "class_0": report["0"],
        "class_1": report["1"],
        "macro_avg": report["macro avg"],
        "weighted_avg": report["weighted avg"]
    }