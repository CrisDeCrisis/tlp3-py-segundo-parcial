import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import type { PredictionResponse } from "../interface/prediction";
import type { PredictionFormData } from "../schema/prediction";

export const usePrediction = () => {
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitPrediction = async (data: PredictionFormData) => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await useFetch(
        "http://localhost:3000/ml/predict",
        "POST",
        data
      );

      const result: PredictionResponse = await response.json();
      setPrediction(result);
    } catch (err) {
      setError(
        "Error al procesar la predicción. Verifique que el servidor esté ejecutándose."
      );
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    prediction,
    isLoading,
    error,
    submitPrediction,
  };
};
