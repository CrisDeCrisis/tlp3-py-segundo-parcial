from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib

# Cargar el modelo
model = joblib.load("asteroid_model.pkl")

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
        "probability": round(prob, 3)
    }
