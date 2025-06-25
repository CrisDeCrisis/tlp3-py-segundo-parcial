import HomeHeader from "@/components/Home/HomeHeader"
import HomeCards from "@/components/Home/HomeCards"

function Home() {
    return (
        <div id="home" className="relative min-h-screen overflow-hidden">
            <div className="relative z-10 flex flex-col min-h-screen p-8">
                <div className="max-w-6xl mx-auto flex-1 flex flex-col">
                    <HomeHeader />

                    {/* Espaciador flexible */}
                    <div className="flex-1"></div>

                    <HomeCards />
                </div>
            </div>
        </div>
    )
}

export default Home