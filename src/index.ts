import { countOccurenses } from "./basic_challenges/count_occurens";
import { countOccurensesUsingForLoop } from "./basic_challenges/count_occurens";
import { titleCase } from "./basic_challenges/titleCase";
import { reverseString } from "./basic_challenges/reverseString";
import { checkPalindrome } from "./basic_challenges/checkPalindrome";
import { countVowels } from "./basic_challenges/countVowels";

const Main = () => {
    // count occurences
    // const result =  countOccurenses('Hello hi bye bye' , 'o');  
    // const res1 = countOccurensesUsingForLoop('hello hi bye bye', 'l')
    // const res = titleCase('kungfu pattya')
    // const res = reverseString('Hello')
    // const res = checkPalindrome('mominf');
    const res  = countVowels('hello hi bye bye');
    console.log(res);

}

Main();

