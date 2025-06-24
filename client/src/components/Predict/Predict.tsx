import { usePrediction } from "./hooks/usePrediction"
import { PredictionForm } from "./components/PredictionForm"
import { PredictionResults } from "./components/PredictionResults"

function Predict() {
    const { prediction, isLoading, error, submitPrediction } = usePrediction()

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <PredictionForm
                onSubmit={submitPrediction}
                isLoading={isLoading}
            />

            {/* Resultados */}
            <div className="space-y-6">
                <PredictionResults
                    prediction={prediction}
                    error={error}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Predict
