
function Credits() {
    return (
        <div id="credits" className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-3/5 flex items-center justify-center z-30">
                <div className="text-white max-w-md mx-auto">
                    <section className="relative text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:text-white px-4 py-3 rounded-2xl border border-white/10 shadow-inner overflow-hidden group cursor-pointer">
                        <span className="relative z-10">Integrantes:</span>
                        <ul className="mt-2 ml-5 space-y-1">
                            <li>Gonzalez Cristian</li>
                            <li>Vega Tobias</li>
                        </ul>
                    </section>
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