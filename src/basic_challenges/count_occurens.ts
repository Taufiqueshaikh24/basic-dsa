


export const countOccurenses = (string:string , l:string ):number => {
      
      let split = string.split(l).length - 1 
      console.log(split)
    return split;
}


export const countOccurensesUsingForLoop = (string:string , letter :string):number => {
       let count:number = 0 ;



       for(let i:number = 0 ; i < string.length ; i++ ){
              if(string[i] === letter){
                 count++
            }

        }

        return count; 
       
}