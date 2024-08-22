export class Stack <T> {
    maxSize: number;
    stack: T[];
    top: number;
    constructor(){
        this.maxSize =100;
        this.stack  = [];
        this.top = -1 
    }

    push(value: T ):boolean{
         if(this.isFull()){
            return false ;
         }
         this.top++
         this.stack[this.top] = value;
         return true;
    }

    pop(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.stack[this.top];
        this.stack[this.top] = undefined as any; // Clear the value
        this.top--;
        return value;
    }

    isFull(){
        return this.top === this.maxSize -1 
    }
    isEmpty(){
        return this.top === -1
    }
    peek(){
        if(this.isEmpty()){
            return false ; 
        }
        return this.stack[this.top]
    }
}