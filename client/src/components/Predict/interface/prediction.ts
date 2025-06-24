import type { PredictionFormData } from "../schema/prediction";

export interface PredictionResponse {
  is_neo: 0 | 1;
  probability_neo: number;
  probability_no_neo: number;
}

export interface PredictionFormProps {
  onSubmit: (data: PredictionFormData) => Promise<void>;
  isLoading: boolean;
}

export interface PredictionResultsProps {
  prediction: PredictionResponse | null;
  error: string | null;
  isLoading: boolean;
}
