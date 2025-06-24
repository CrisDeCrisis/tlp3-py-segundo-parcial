
function Home() {
    return (
        <div id="home" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center h-screen">
                <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
                    Bienvenido al Observatorio de Asteroides
                </h1>
            </div>
        </div>
    )
}

export default Home