import Stars from "@/components/Stars/Stars"

function Home() {
    return (
        <div id="home" className="relative">
            <Stars />
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src="observatory-skyless.svg"
                    alt="Observatorio"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-[oklch(0.129_0.042_264.695)] to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-0 h-5 bg-gradient-to-t from-[oklch(0.129_0.042_264.695)] to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[oklch(0.129_0.042_264.695)] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
            </div>
        </div>
    )
}

export default Home