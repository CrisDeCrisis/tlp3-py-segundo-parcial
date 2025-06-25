import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import type { MetricsData } from "../interfaces/metrics";

export const useMetrics = () => {
  const [metricsData, setMetricsData] = useState<MetricsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = async () => {
    setIsLoading(true);
    setError(null);
    setMetricsData(null);

    try {
      const response = await useFetch(
        "http://localhost:3000/ml/metrics",
        "GET"
      );
      const data = await response.json();
      setMetricsData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al cargar las métricas"
      );
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    metricsData,
    isLoading,
    error,
    fetchMetrics,
  };
};
