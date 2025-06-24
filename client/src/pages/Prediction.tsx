import Predict from "@/components/Predict/Predict"

function Prediction() {

    return (
        <section id="prediction" className="relative min-h-screen pt-12">
            <div className="relative z-10 p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl text-white font-bold mb-4">Predicción de Órbita</h1>
                        <p className="text-gray-300 text-lg">
                            Introduce los parámetros orbitales para determinar si un asteroide es cercano a la Tierra (NEO)
                        </p>
                    </div>
                    <Predict />
                </div>
            </div>
        </section>
    )
}

export default Prediction