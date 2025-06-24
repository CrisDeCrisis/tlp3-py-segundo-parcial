import type { MetricsData } from "../interface/metrics";
import type { TableGenerated } from "../interface/table";
import { formatValue } from "./formatValue";

export const createTableRows = (data: MetricsData): TableGenerated[] => {
  return [
    {
      metric: "Precisión de clasificación",
      class_0: formatValue(data.class_0.precision),
      class_1: formatValue(data.class_1.precision),
      weighted_avg: formatValue(data.weighted_avg.precision),
    },
    {
      metric: "Taza de acierto",
      class_0: formatValue(data.class_0.recall),
      class_1: formatValue(data.class_1.recall),
      weighted_avg: formatValue(data.weighted_avg.recall),
    },
    {
      metric: "Balance de clasificación",
      class_0: formatValue(data.class_0["f1-score"]),
      class_1: formatValue(data.class_1["f1-score"]),
      weighted_avg: formatValue(parseFloat(data.weighted_avg["f1-score"])),
    },
    {
      metric: "Datos de testeo",
      class_0: formatValue(data.class_0.support, true),
      class_1: formatValue(data.class_1.support, true),
      weighted_avg: formatValue(data.weighted_avg.support, true),
    },
    {
      metric: "Efectividad de predicción",
      accuracy: formatValue(data.accuracy),
    },
  ];
};
