import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import type { PredictionResult } from "./interface/prediction"
import { predictionSchema, type PredictionFormData } from "./schema/prediction"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

function Predict() {
    const [prediction, setPrediction] = useState<PredictionResult | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<PredictionFormData>({
        resolver: zodResolver(predictionSchema),
        defaultValues: {
            absolute_magnitude: 0,
            eccentricity: 0,
            semimajor_axis: 0,
            perihelion: 0,
            inclination: 0,
            time_perihelion: 0,
            moid_ld: 0,
        },
    });

    const onSubmit = async (data: PredictionFormData) => {
        setIsLoading(true)
        setError(null)
        setPrediction(null)

        try {
            const response = await useFetch(
                "http://localhost:3000/ml/predict",
                "POST",
                data
            )

            const result: PredictionResult = await response.json()
            setPrediction(result)
        } catch (err) {
            setError("Error al procesar la predicción. Verifique que el servidor esté ejecutándose.")
            console.error("Error:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
                <CardHeader>
                    <CardTitle className="text-white">Parámetros Orbitales</CardTitle>
                    <CardDescription className="text-gray-400">
                        Completa todos los campos obligatorios para obtener la predicción
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Grid de campos en dos columnas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="absolute_magnitude"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Magnitud Absoluta</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 18.5"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="eccentricity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Excentricidad (0-1)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 0.25"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="semimajor_axis"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Semieje Mayor (AU)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 2.5"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="perihelion"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Perihelio (AU)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 1.8"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="inclination"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Inclinación (grados)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 12.5"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="time_perihelion"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Tiempo de Perihelio</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 2458849.5"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="moid_ld"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel className="text-white">MOID (Distancias Lunares)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    placeholder="Ej: 25.8"
                                                    className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-transparent text-white border border-gray-400 hover:bg-white/10 hover:border-white font-semibold transition-colors"
                            >
                                {isLoading ? "Procesando..." : "Predecir Órbita"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            {/* Resultados */}
            <div className="space-y-6">
                {error && (
                    <Card className="bg-red-900/30 border-red-700/40">
                        <CardContent className="pt-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                <p className="text-red-200 font-medium">Error</p>
                            </div>
                            <p className="text-red-100 mt-2">{error}</p>
                        </CardContent>
                    </Card>
                )}

                {prediction && (
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
                                        {(prediction.probability * 100).toFixed(1)}%
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
                )}

                {!prediction && !error && !isLoading && (
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
                )}
            </div>
        </div>
    )
}

export default Predict