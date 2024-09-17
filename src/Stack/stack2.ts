
type Node<T> = {
       value : T,
       prev?: Node<T>     
}

export class Stack2 <T> {
      public length: number;
      private head? : Node<T>
     
      constructor(){
         this.head = undefined ;
         this.length = 0 ; 
      }

      push(item : T):void {
        const node = { value  : item } as Node<T>;
        if(!this.head){
            this.head = node ;
            return;
        }
        this.length++
        node.prev = this.head;
        this.head =node; 

      }

      pop(){
            this.length  = Math.max( 0 , this.length - 1);
           if(this.length === 0 ){
              const head  = this.head;
              this.head = undefined ; 
              return  head?.value;
           }



           const head = this.head ; 
           this.head = this.head?.prev;
           return head?.value ; 



      }
      peek(){
        return this.head?.value
      }
}