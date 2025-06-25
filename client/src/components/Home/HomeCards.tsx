import { cardsData } from "./constants/cardsData"
import InfoCard from "./InfoCard"

function HomeCards() {


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
            {cardsData.map((card, index) => (
                <InfoCard
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    description={card.description}
                    className={card.className}
                />
            ))}
        </div>
    )
}

export default HomeCards
