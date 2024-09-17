
type Node<T> = {
    
      value:T , 
      next? : Node<T>

}

export class Queue2<T> {
      private length: number;
      private head?: Node <T>;
      private tail?: Node <T>;

      constructor(){
           this.head = this.tail = undefined ;
           this.length = 0 ; 
      }


      enqueue(item :T){
         const node = { value :item};
            if(!this.tail){
                this.head = this.tail = node;
            }
            this.length++;

            this.tail.next  =  node;
            this.tail  = node ;

      }



      dequeue(){
         if(!this.head){
             return undefined;
         }
          this.length--;

          const head = this.head;
            
          if(this.length === 0 ){
              this.tail  = undefined; 
          }
          this.head = this.head.next;
          return head?.value;
          

      }


      peek(){
          return this.head?.value;
      }


}