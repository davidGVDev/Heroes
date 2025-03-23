import { getHeroesByPublisher } from "../helpers/getHeoresByPublisher"
import { HeroCard } from "./HeroCard";

interface HeroListProps {
  publisher: string;
}

export const HeroList = ({publisher}:HeroListProps) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
    </div>
  )
}
