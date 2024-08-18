



export const removeDuplicates =  (arr:any[]):any[] => {
    // one way of doing it
    const set   = [...new Set(arr)];



//    second way of doing it 
    const ar:any[] = [];


    for( let i = 0  ; i < arr.length ; i++){
        if(!ar.includes(arr[i])){
            ar.push(arr[i])
        }
    }
     

    // using filer method

    let New = arr.filter((item:any , index:number) =>  arr.indexOf(item) == index  );

     arr.filter((item :any , i:any) => {
        console.log(arr.indexOf(item) , i )
    
     })

    // using reduce
    let red = arr.reduce((unique:any , item:any) => unique.includes(item) ? unique : [...unique , item] ,[]);

    return red;
}