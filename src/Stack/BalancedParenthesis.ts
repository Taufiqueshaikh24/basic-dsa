import { Stack } from "./Stack";


export const BalancedParenthesis = (str:string):boolean => {
      let stack = new Stack();
    for(let i = 0 ; i < str.length ; i++){
           if(str[i] === '('){
                stack.push(str[i])
           }else if(str[i] === ')'){
              if(stack.isEmpty()){
                return false;
              }
              stack.pop();
           }
           console.log(stack)
    }
    console.log(stack);

    return stack.isEmpty(); 
}