const Navbar = () => {
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full text-center py-6 z-50 overflow-hidden">
            <div className="relative inline-block align-middle">
                {/* Líneas decorativas a los lados */}
                <span className="hidden md:block absolute left-[-300%] top-1/2 w-[300%] h-[5px] -translate-y-1/2 border-t border-b border-gray-300/35" aria-hidden="true"></span>
                <span className="hidden md:block absolute right-[-300%] top-1/2 w-[300%] h-[5px] -translate-y-1/2 border-t border-b border-gray-300/35" aria-hidden="true"></span>
                <ul className="relative flex flex-row items-center justify-center h-[21px] border-l border-r border-gray-300/35 m-0">
                    <li className="inline-block -mt-[9px] mx-2 rounded-lg py-3 px-4 text-white font-semibold">
                        <button
                            onClick={() => handleScroll("home")}
                            className="bg-transparent text-inherit text-lg font-semibold focus:outline-none hover:underline cursor-pointer transition-colors duration-300"
                        >
                            Inicio
                        </button>
                    </li>
                    <li className="inline-block -mt-[9px] mx-2 rounded-lg py-3 px-4 text-white font-semibold">
                        <button
                            onClick={() => handleScroll("prediction")}
                            className="bg-transparent text-inherit text-lg font-semibold focus:outline-none hover:underline cursor-pointer transition-colors duration-300"
                        >
                            Predicción
                        </button>
                    </li>
                    <li className="inline-block -mt-[9px] mx-2 rounded-lg py-3 px-4 text-white font-semibold">
                        <button
                            onClick={() => handleScroll("metrics")}
                            className="bg-transparent text-inherit text-lg font-semibold focus:outline-none hover:underline cursor-pointer transition-colors duration-300"
                        >
                            Métricas
                        </button>
                    </li>
                    <li className="inline-block -mt-[9px] mx-2 rounded-lg py-3 px-4 text-white font-semibold">
                        <button
                            onClick={() => handleScroll("credits")}
                            className="bg-transparent text-inherit text-lg font-semibold focus:outline-none hover:underline cursor-pointer transition-colors duration-300"
                        >
                            Créditos
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
