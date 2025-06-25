import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { InfoCardProps } from "./interfaces/infoCards"


function InfoCard({ title, icon, description, className = "" }: InfoCardProps) {
    return (
        <Card className={`bg-black/20 backdrop-blur-sm border-gray-700/30 transition-all duration-500 hover:scale-105 ${className}`}>
            <CardHeader className="text-center">
                <CardTitle className="text-white text-xl flex flex-col items-center">
                    <span>{title}</span>
                    <span className="text-2xl mt-2">{icon}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}

export default InfoCard
