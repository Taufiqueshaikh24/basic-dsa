import { Queue } from "./queue";





export const palindromeWithQueue = (str:string):boolean =>{

      const queue = new Queue();
      let reverse = ''
      for(let i = 0 ; i < str.length ; i++){
           queue.enqueue(str[i]);
      }

      while(!queue.isEmpty()){
           reverse += queue.dequeue();
      }

      if(reverse !== str){
          return false;
      }

   
       console.log(queue)

    return true ; 
}