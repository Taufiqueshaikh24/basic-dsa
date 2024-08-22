export class Queue <T> {
     queue: T[];
    head: number;
    tail: number;
    maxsize: number;
     constructor(){
         this.queue = [];
         this.head = 0;
         this.tail = 0 ; 
         this.maxsize = 100;
     }

     enqueue(item:T){
         if(this.isFull()){
            return false;
         }
         this.queue[this.tail] = item;
         this.tail++;
         return true;
     }
     getLength(){
        return this.tail - this.head 
     }

     isFull(){
        return this.getLength() === this.maxsize
     }

     peek(){
        return this.queue[this.head]
     }

     isEmpty(){
        return this.getLength() === 0
     }

     dequeue(){
        if(this.isEmpty()){
            return []
        }
       const item = this.queue[this.head]
       this.head++
       return item ; 
     }
    
}