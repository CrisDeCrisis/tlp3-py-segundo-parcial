
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Credits() {
    return (
        <div id="credits" className="relative w-full h-screen overflow-hidden">            <div className="absolute top-0 left-0 w-1/3 h-3/5 flex items-center justify-center z-30">
            <div className="text-white w-3/5">
                <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30 transition-all duration-500 hover:scale-105 pl-6">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-white text-lg">Integrantes:</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pl-16">
                        <ul className="space-y-1 text-gray-200">
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Gonzalez Cristian
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Vega Tobias
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
            <img
                src="observatory-skyless.svg"
                alt="Observatorio"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    )
}

export default Credits