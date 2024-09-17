import { LinkedList } from "./linkedlist";



export default function reverseStrinUsingLinkedList(str:string):string{

    let list = new LinkedList();
    for(let i = str.length - 1 ; i >=0 ; i--){
        list.add(str[i]); 
    }
    // console.log(list.printAll());
    let rstr = '';
    let current = list.head ; 

    while(current !== null){
        rstr += current.data;
        current = current.next
    }


   

    return rstr ; 
}