

export class MinHeap {
     length : number;
     data : number [];

     constructor(){
         this.length = 0 ; 
         this.data = [];
     }


     insert(val:number):void{
           this.data[this.length] = val; 
           this.heapifyUp(this.length);
           this.length++;
     }

     delete(idx:number):number | undefined{
         this.length--
         const out = this.data[0];
         if(this.length === 0 ){
            this.data = [];
            return out
         }

         this.data[0] = this.data[this.length];
         this.heapifyDown(0);
         return out; 

     }


     heapifyDown(idx:number):void { 
             if(idx >= this.length){
                return ;
             }

             const lIdx = this.leftChild(idx);
             const rIdx = this.rightChild(idx);

             if(lIdx >= this.length){
                return ; 
             }


             const lV = this.data[lIdx];
             const rV = this.data[rIdx];
             const v = this.data[idx];

             if(lV > rV && v > rV){
                 this.data[idx] = rV; 
                 this.data[rIdx] = v ; 
                 this.heapifyDown(rIdx);
             }else if( rV< lV && v < lV){
                  this.data[idx] = lV; 
                  this.data[lIdx] = v ;
                  this.heapifyDown(lIdx);
             }



     }


     heapifyUp(idx:number):void{
           if(idx === 0 ){
            return ;
           }
         

           const p = this.parent(idx);
           const parentVal = this.data[p];
           const val  = this.data[idx];


           if(parentVal > val){
               this.data[idx] = parentVal;
               this.data[p]  = val; 
              this.heapifyUp(p);
           }

     }

     private parent(idx:number):number {
           return Math.floor((idx - 1)/2);
     }

     private leftChild(idx:number):number {
          return idx * 2 + 1 ; 
     }

     
     private rightChild(idx:number):number {
        return idx * 2 + 2 ; 
   }


}