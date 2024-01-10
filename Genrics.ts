function simple <T> (initial: T): 
[()=> T, (v : T) => void]{
    let str: T = initial;

    return [
        ()=> str,
        (v : T) => {
            str = v
        }
    ]
}


let names: string = "jack";


console.log(names);


function ranker<RankItem>(items: RankItem[], rank: (v: RankItem)=> number): RankItem[]{
    interface Rank  {
        item: RankItem;
        rank: number;
    }
    const ranks: Rank[] = items.map((item)=> ({
        item,
        rank: rank(item)
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item)

}