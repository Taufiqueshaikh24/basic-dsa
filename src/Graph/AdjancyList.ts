type GraphEdge = { to: number, weight : number};
export type AdjancyList = GraphEdge[][];

function walk(graph: AdjancyList , curr: number , seen: boolean[] , needle : number , path:number[]):boolean {


    if(seen[curr]){
        return false; 
    }

    seen[curr] = true; 

    // recurse
    path.push(curr);
    
    if(curr === needle){
        return true
    }
    // pre


    // recursive
    const list = graph[curr];

    for(let i = 0 ; i < list.length ; ++i){
        const edge = list[i];

        if(walk(graph , edge.to , seen , needle , path)){
            path.push(edge.to);
             break; 
        }
    }

    // post 
    path.pop();

    return false; 
}





export default function dfs(graph:AdjancyList , source : number , needle : number): number [] | null {
    const seen:boolean[] = new Array(graph.length).fill(false);
    const path:number[] = [];

    walk(graph , source , seen , needle , path)


    if(path.length === 0 ){ return null;}

    return path


}


const graph: AdjancyList = [
    [{ to: 1, weight: 1 }, { to: 2, weight: 1 }],
    [{ to: 3, weight: 1 }],
    [{ to: 3, weight: 1 }],
    []
];

const source = 0;
const needle = 3;
const result = dfs(graph, source, needle);

console.log(result); // Output the path 