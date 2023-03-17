function useSignal<T>(initialState: T): [() => T, (v: T) => void] {
  let value: T = initialState;
  return [
    () => value,
    (v: T) => {
      value = v;
    },
  ];
}

const [timer, setTimer] = useSignal(10);
const [email, setEmail] = useSignal("prabhu@email.com");

console.log(timer());
console.log(email());
setTimer(20);
setEmail("ammu@email.com");
console.log(timer());
console.log(email());

// Overriding Inferred Generics Types
const [language, setLanguage] = useSignal<string | null>(null);
console.log(language());
setLanguage("Golang");
console.log(language());

// Generic Interfaces
// In TS you make anything generic

interface Rank<T> {
  item: T;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (value: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megaasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
