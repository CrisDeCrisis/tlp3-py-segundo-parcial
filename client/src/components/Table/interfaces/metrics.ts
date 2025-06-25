export interface MetricsData {
  accuracy: number;
  class_0: {
    precision: number;
    recall: number;
    "f1-score": number;
    support: number;
  };
  class_1: {
    precision: number;
    recall: number;
    "f1-score": number;
    support: number;
  };
  weighted_avg: {
    precision: number;
    recall: number;
    "f1-score": string;
    support: number;
  };
}
