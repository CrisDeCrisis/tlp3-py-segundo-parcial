import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { predictionFormSchema, type PredictionFormInputs, type PredictionFormData } from "../schema/prediction"
import type { PredictionFormProps } from "../interface/prediction"



export const PredictionForm = ({ onSubmit, isLoading }: PredictionFormProps) => {
    const form = useForm<PredictionFormInputs>({
        resolver: zodResolver(predictionFormSchema),
        defaultValues: {
            absolute_magnitude: "",
            eccentricity: "",
            semimajor_axis: "",
            perihelion: "",
            inclination: "",
            time_perihelion: "",
            moid_ld: "",
        },
    })

    const handleSubmit = async (data: PredictionFormInputs) => {
        // Convertir strings a números
        const numericData: PredictionFormData = {
            absolute_magnitude: Number(data.absolute_magnitude),
            eccentricity: Number(data.eccentricity),
            semimajor_axis: Number(data.semimajor_axis),
            perihelion: Number(data.perihelion),
            inclination: Number(data.inclination),
            time_perihelion: Number(data.time_perihelion),
            moid_ld: Number(data.moid_ld),
        }

        await onSubmit(numericData)
    }

    return (
        <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
            <CardHeader>
                <CardTitle className="text-white">Parámetros Orbitales</CardTitle>
                <CardDescription className="text-gray-400">
                    Completa todos los campos obligatorios para obtener la predicción
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="absolute_magnitude"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Magnitud Absoluta</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 18.5"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
                                        <FormLabel className="text-white">Excentricidad (0-1)</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 0.25"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
                                        <FormLabel className="text-white">Semieje Mayor (AU)</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 2.5"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
                                        <FormLabel className="text-white">Perihelio (AU)</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 1.8"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
                                        <FormLabel className="text-white">Inclinación (grados)</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 12.5"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
                                        <FormLabel className="text-white">Tiempo de Perihelio</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 2458849.5"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
                                        <FormLabel className="text-white">MOID (Distancias Lunares)</FormLabel>                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Ej: 25.8"
                                                autoComplete="off"
                                                className="bg-black/20 border-gray-600 text-white placeholder:text-gray-500 focus:border-white/50 focus:ring-white/20"
                                                {...field}
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
    )
}
