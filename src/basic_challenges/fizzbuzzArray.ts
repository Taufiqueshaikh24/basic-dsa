



export const fizzBuzzArray = (num:number):any[] => {
      
     let arr:any[] = [];

     for(let i = 1 ; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            arr.push('fizzBuzz');
            continue
        }else if(i % 3 === 0){
                arr.push('fizz')
                continue
            }else if(i % 5 === 0 ){
                arr.push('buzz');
                continue
            }else{

                arr.push(i);
            }
     }
    console.log(arr);
    return arr;
}