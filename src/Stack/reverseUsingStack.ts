import { Stack } from "./Stack";

export const reverseStrinUsingStack = (str:string):string => {

    const stack = new Stack();
     let reverseString = ''
    for(let i = 0 ; i < str.length ; i++){
         stack.push(str[i])
        
    }

    while(!stack.isEmpty()){
        reverseString += stack.pop();
    }

    return reverseString;
}