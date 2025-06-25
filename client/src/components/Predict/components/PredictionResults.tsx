import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { PredictionResultsProps } from "../interfaces/prediction"


export const PredictionResults = ({ prediction, error, isLoading }: PredictionResultsProps) => {
    if (error) {
        return (
            <Card className="bg-red-900/30 border-red-700/40">
                <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <p className="text-red-200 font-medium">Error</p>
                    </div>
                    <p className="text-red-100 mt-2">{error}</p>
                </CardContent>
            </Card>
        )
    }

    if (prediction) {
        return (
            <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
                <CardHeader>
                    <CardTitle className="text-white">Resultado de la Predicción</CardTitle>
                    <CardDescription className="text-gray-400">
                        Análisis completado
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${prediction.is_neo === 1 ? 'text-red-400' : 'text-green-400'
                                }`}>
                                {prediction.is_neo === 1 ? 'Sí' : 'No'}
                            </div>
                            <p className="text-gray-400 text-sm">Es NEO</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">
                                {prediction.is_neo === 1
                                    ? (prediction.probability_neo * 100).toFixed(1)
                                    : (prediction.probability_no_neo * 100).toFixed(1)}%
                            </div>
                            <p className="text-gray-400 text-sm">Probabilidad</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-black/20 rounded-lg border border-gray-700/30">
                        <h4 className="text-white font-semibold mb-2">Interpretación:</h4>
                        <p className="text-gray-300 text-sm">
                            {prediction.is_neo === 1
                                ? "Este asteroide tiene características orbitales que lo clasifican como un Objeto Cercano a la Tierra (NEO). Esto significa que su órbita lo acerca considerablemente a nuestro planeta."
                                : "Este asteroide no se clasifica como un Objeto Cercano a la Tierra (NEO). Su órbita mantiene una distancia segura de nuestro planeta."
                            }
                        </p>
                        <p className="text-gray-300 text-sm mt-2">
                            La probabilidad indica el nivel de confianza del modelo en esta clasificación.
                        </p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (!isLoading) {
        return (
            <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
                <CardContent className="pt-6">
                    <div className="text-center text-gray-400">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black/30 flex items-center justify-center">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <p>Completa el formulario para obtener una predicción</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return null
}
