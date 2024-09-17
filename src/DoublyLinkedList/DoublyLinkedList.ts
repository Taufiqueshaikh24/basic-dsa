type Node<T> = {
    value : T,
    prev?: Node<T>     
    next?: Node<T>     
}

export class DoublyLinkedList <T> {
     public length : number
     private head? : Node<T>
     private tail?  : Node<T>


     constructor(){
        this.length = 1 ; 
        this.head = this.tail = undefined; 
     }

     prepend(item:T){
        const node = { value : item} as Node<T>;
         if(!this.head){
            this.tail = this.head = node as Node<T>; 
            return ; 
         }
         node.next = this.head;     
         this.head.prev = node; 
         this.head = node;  
         this.length++;
         

     }

     insertAt(item:T , idx:number){

         const node = { value : item} as Node<T>;
         if(idx > this.length){
             throw new Error('Index is greater than the length');
           }else if(idx === this.length){
               this.append(item);
           }else if(idx === 0 ){
               this.prepend(item);
           }
           
           this.length++;
           let  curr = this.head; 
           for(let i  = 0 ; i < idx ; i++){
                    curr = curr?.next
           }

           curr  = curr as Node<T> ; 

           node.next = curr;  // node next = c = curr ;
           node.prev = curr.prev; // node prev = a = prev = b
           curr.prev = node;  // 

           if(curr.prev){
                curr.prev.next = node; 
           }





     }


     append(item:T){
            const node = {value : item} as Node<T>;
                if(!this.tail){
                    this.tail = this.head = node; 
                    return  ; 
                }
            this.length++;
            node.prev = this.tail; 
            this.tail.next = node;
            this.tail = node; 
     }

     remove(item:T){
        let curr = this.head; 
        for(let i = 0 ; curr  &&  i < this.length ; i++){
              if(curr?.value === item){
                   break ; 
              }
              curr = curr?.next;
        }
          
        if(!curr){return;};
        this.length--; 
        if(!this.head && !this.tail){
            // const val = this.head?.value;
            this.tail = this.head = undefined; 
            return ;
        }

        if(curr.prev){
            curr.prev.next = curr.next;
        }
        if(curr.next){
            curr.next.prev = curr.prev;
        }

        if(curr === this.head){
            this.head = curr.next;
        }

        if(curr === this.tail){
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined; 


        return curr.value; 

            //   return this.removeNode(curr);

     }
     removeAt(idx:number){
          if(idx > this.length){
               throw new Error('Index is > than Length');
          }
          const curr = this.getAt(idx);
          if(!curr){return undefined};


          this.length--; 
          if(!this.head && !this.tail){
            //   const val = this.head?.value;
              this.tail = this.head = undefined; 
              return ;
          }
  
          if(curr.prev){
              curr.prev.next = curr.next;
          }
          if(curr.next){
              curr.next.prev = curr.prev;
          }
  
          if(curr === this.head){
              this.head = curr.next;
          }
  
          if(curr === this.tail){
              this.tail = curr.prev;
          }
  
          curr.next = curr.prev = undefined; 

          


     }


   

     
     get(idx:number): T | undefined {
        return this.getAt(idx)?.value;
     }



         private removeNode(node: Node<T>): T | undefined {
        if (!node.prev) {
            this.head = node.next;
        } else {
            node.prev.next = node.next;
        }

        if (!node.next) {
            this.tail = node.prev;
        } else {
            node.next.prev = node.prev;
        }

        this.length--;

        node.prev = node.next = undefined;
        return node.value;
    }
       
    //  removeNode(node:Node<T>): T | undefined {
    //            this.length--; 

    //            if(this.length ===0 ){
    //               const val = this.head?.value;
    //               this.tail = this.head = undefined; 
    //               return val; 
    //            }

    //            if(node.prev){
    //             node.prev.next = node.next;
    //            }

    //            if(node.next){
    //             node.next.prev = node.prev
    //            }

    //            if(node = this.head){
    //                this.head = node.next;
    //            }

    //            if(node = this.tail){
    //                this.tail = node.prev
    //            }

    //            node.prev = node.next = undefined ; 
    //            return node.value; 


    //  }

    getAt(idx:number): Node<T> | undefined{
              let curr = this.head; 
              for(let i = 0 ; curr && i < idx ; ++i){
                    curr = curr.next; 
              }     
              return curr; 
     }

}





// type Node<T> = {
//     value: T,
//     prev?: Node<T>,
//     next?: Node<T>
// }

// export class DoublyLinkedList<T> {
//     public length: number;
//     private head?: Node<T>;
//     private tail?: Node<T>;

//     constructor() {
//         this.length = 0;
//         this.head = this.tail = undefined;
//     }

//     prepend(item: T): void {
//         const node: Node<T> = { value: item, next: this.head };

//         if (!this.head) {
//             this.tail = this.head = node;
//         } else {
//             this.head.prev = node;
//             this.head = node;
//         }

//         this.length++;
//     }

//     insertAt(item: T, idx: number): void {
//         if (idx > this.length) {
//             throw new Error('Index is greater than the length');
//         } else if (idx === this.length) {
//             this.append(item);
//             return;
//         } else if (idx === 0) {
//             this.prepend(item);
//             return;
//         }

//         const node: Node<T> = { value: item };
//         let curr = this.head;

//         for (let i = 0; i < idx; i++) {
//             curr = curr?.next;
//         }

//         node.next = curr;
//         node.prev = curr?.prev;

//         if (curr?.prev) {
//             curr.prev.next = node;
//         }

//         if (curr) {
//             curr.prev = node;
//         }

//         if (idx === 0) {
//             this.head = node;
//         }

//         this.length++;
//     }

//     append(item: T): void {
//         const node: Node<T> = { value: item };

//         if (!this.tail) {
//             this.tail = this.head = node;
//         } else {
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//         }

//         this.length++;
//     }

//     remove(item: T): T | undefined {
//         let curr = this.head;

//         while (curr) {
//             if (curr.value === item) {
//                 return this.removeNode(curr);
//             }
//             curr = curr.next;
//         }

//         return undefined;
//     }

//     removeAt(idx: number): T | undefined {
//         const node = this.getAt(idx);
//         if (!node) {
//             return undefined;
//         }

//         return this.removeNode(node);
//     }

//     get(idx: number): T | undefined {
//         return this.getAt(idx)?.value;
//     }

//     private removeNode(node: Node<T>): T | undefined {
//         if (!node.prev) {
//             this.head = node.next;
//         } else {
//             node.prev.next = node.next;
//         }

//         if (!node.next) {
//             this.tail = node.prev;
//         } else {
//             node.next.prev = node.prev;
//         }

//         this.length--;

//         node.prev = node.next = undefined;
//         return node.value;
//     }

//     private getAt(idx: number): Node<T> | undefined {
//         let curr = this.head;

//         for (let i = 0; curr && i < idx; i++) {
//             curr = curr.next;
//         }

//         return curr;
//     }
// }
