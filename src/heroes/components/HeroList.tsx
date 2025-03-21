import { getHeroesByPublisher } from "../helpers/getHeoresByPublisher"

interface HeroListProps {
  publisher: string;
}

export const HeroList = ({publisher}:HeroListProps) => {
  return (
    <ul>
        {getHeroesByPublisher(publisher).map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
    </ul>
  )
}
