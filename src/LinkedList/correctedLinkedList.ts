

class LinkedList {
      constructor(){
          this.length = 0; 
          this.tail  = this.head = null | undefined ; 
      }
      
      
      
      prepend(item){
           const node = {value : item , next: null };
           this.length++;
           if(!this.head){
               this.tail = this.head = node; 
               return 
           }
            
            
            const head = this.head; 
            node.next = this.head  
            this.head = node; 
            return head?.value ; 

            
      }
      
      

    append(item) {
        const node = { value: item , next : null };
        if (!this.head) {
            this.head = this.tail =  node;
        }
          
          this.tail.next = node; 
          this.tail  = node; 
    
        this.length++;
    }
      
      insertAt(item , idx){
          const node = { value : item , next: null};
             if(idx > this.length){
                 throw new Error("Idx > length")
                 return 
             }else if( idx === 0 ){
                 this.prepend(item)
                 return 
             }else if(idx === this.length){
                 this.append(item);
                 return 
             }
      
            let curr = this.head;
  
            for (let i = 0; i < idx - 1; i++) {
                curr = curr.next;
            }
             node.next = curr.next; 
             curr.next = node; 
            this.length++;
            
      }
      
      
      remove(item){
             let curr  = this.head; 
             let prev = null ; 
        for(let i = 0 ; curr  &&  i < this.length ; i++){
              if(curr.value === item){
                  break ; 
              }
              prev = curr;  
              curr = curr?.next;
        }
          

            if(!curr){return };
            if(!this.head){
                this.tail = this.head = null; 
            }
            if(curr === this.head){
                this.head = this.head.next; 
            }else{
                prev.next = curr.next; 
                if(curr === this.tail){
                    this.tail  = prev ; 
                }
            }
            
            this.length--;
           
      }
      
      
      removeAt(idx){
               let curr  = this.head; 
             let prev = null ; 
        for(let i = 0 ; curr  &&  i < idx ; i++){
              if(curr.value === item){
                  break ; 
              }
              prev = curr;  
              curr = curr?.next;
        }
          

            if(!curr){return };
            if(!this.head){
                this.tail = this.head = null; 
            }
            if(curr === this.head){
                this.head = this.head.next; 
            }else{
                prev.next = curr.next; 
                if(curr === this.tail){
                    this.tail  = prev ; 
                }
            }
            
            this.length--;
              
      }
      

      
      
      get(idx){
         return this.getAt(idx).value
      }
      
      getAt(idx){
          let curr = this.head ; 
          for(let i = 0 ; i < idx ; i++){
              curr = curr.next 
          }
           return curr; 
      }
      

   print(){
       let curr = this.head; 
       while(curr){
           console.log(curr.value); 
           curr = curr.next; ; 
       }
   }
      
      
}


const l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.prepend(4)
l.prepend(5)
l.prepend(6)
l.insertAt(7,0)
l.insertAt(8,7)
l.remove(7)
l.remove(8)
l.removeAt(0)
l.removeAt(0)



l.print();
console.log(l);
