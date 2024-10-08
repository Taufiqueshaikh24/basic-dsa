
function qs(arr:number[] , lo:number, hi:number):void {

    if(lo >= hi){
        return ; 
    }

    const pivotidx = partition(arr , lo , hi);

    qs(arr , lo , pivotidx - 1);
    qs(arr, pivotidx + 1, hi);

}

function partition(arr:number [], lo:number , hi:number):number {
    const pivot = arr[hi];

    let idx = lo - 1; 

    for(let i = lo ; i < hi ; i++){
        if(arr[i] <= pivot){
            const tmp = arr[i];
            arr[i]  = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi]= arr[idx];
    arr[idx] = pivot;
    
    return idx;
}




export default function Quicksort2(arr:number[]):void {
        qs(arr , 0 , arr.length -1 );
}