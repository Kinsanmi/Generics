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


export const generic = (user: {names: string, date: number}): string =>{
    return `${user.names} ${user.date}`
}


console.log(generic({names: "Mike", date: 2024}));


function myMap <T>( items: T[], mapFunc: (v : T) => void): void{
    items.reduce((a, v)=>{
        mapFunc(v);
        return  undefined;
    }, undefined)
}


myMap(["A", "b","c"], (v) => console.log(`forEach ${v}`))


function myForEach <T> (items: T[], forEachFunc: (v: T) => void) : void{
    items.reduce((a,v)=>{
        forEachFunc(v);
        return undefined
    }, undefined);



    myForEach([1,2,3,5], (v)=> console.log(`forEach ${v}`));
}



function pluck <DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType ): DataType[KeyType][] {
    return items.map((item)=> item[key])
}

  
const dogs = [
    {
        name: "Rex",
        age: 8,
    },
    {
        name: "Moris",
        age: 3,
    },
]

console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));





// Generics with extends keyof

interface Event {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: Event & { quantity: number, productID: string};
    checkEvent: Event
}


function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void{
    console.log([name, data]);
}


sendEvent( "addToCart", {quantity: 1, productID: "foo", time: 10, user: "bob"})


sendEvent("checkEvent", {time: 10, user: "bob"});



// utility types

