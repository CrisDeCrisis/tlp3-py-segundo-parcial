import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MetricsInfoProps {
    onLoadMetrics: () => void;
    isLoading: boolean;
}

export const MetricsInfo = ({ onLoadMetrics, isLoading }: MetricsInfoProps) => {
    return (
        <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
            <CardHeader>
                <CardTitle className="text-white">Evaluación del Modelo</CardTitle>
                <CardDescription className="text-gray-400">
                    Métricas de rendimiento del modelo de clasificación
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Nuestro modelo de machine learning ha sido entrenado utilizando un dataset con información
                    extraída directamente de la NASA. Este dataset contiene datos precisos sobre asteroides y
                    objetos cercanos a la Tierra (NEO), permitiendo al modelo aprender patrones complejos para
                    realizar predicciones altamente confiables.
                </p>                <div className="pt-4">
                    <Button
                        onClick={onLoadMetrics}
                        disabled={isLoading}
                        className="w-full bg-transparent text-white border border-gray-400 hover:bg-white/10 hover:border-white font-semibold transition-colors"
                    >
                        {isLoading ? 'Cargando métricas...' : 'Cargar métricas del modelo'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
