function HomeHeader() {
    return (
        <div className="text-center mt-40 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
                Modelo de Regresión Logística
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-6">
                Predicción de Asteroides Cercanos a la Tierra (NEO)
                con Machine Learning
            </p>
            {/* Logo NASA centrado */}
            <div className="flex justify-center">
                <img
                    src="/nasa-logo.png"
                    alt="NASA Logo"
                    className="w-20 h-20 md:w-24 md:h-24 opacity-90"
                />
            </div>
        </div>
    )
}

export default HomeHeader
