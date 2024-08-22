import { Queue } from "./queue";





export const reverseStrinUsingQueue = (str:string):string => {

    const queue  = new Queue();
    let reverse = '';
    for(let i = str.length -1 ; i >= 0 ; i--){
            queue.enqueue(str[i])

           
      
    }
    while(!queue.isEmpty()){
        reverse += queue.dequeue();
    }
    console.log(queue);
    return reverse;
}