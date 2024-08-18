import { countOccurenses } from "./basic_challenges/count_occurens";
import { countOccurensesUsingForLoop } from "./basic_challenges/count_occurens";
import { titleCase } from "./basic_challenges/titleCase";
import { reverseString } from "./basic_challenges/reverseString";
import { checkPalindrome } from "./basic_challenges/checkPalindrome";
import { countVowels } from "./basic_challenges/countVowels";
import { removeDuplicates } from './basic_challenges/removeDuplicates';
import { fizzBuzzArray } from "./basic_challenges/fizzbuzzArray";
import { arrayIntersection } from "./basic_challenges/arrayIntersection";
import { findMissingNumber } from "./basic_challenges/findmissingnumber";
import { findMissingLetter } from "./basic_challenges/findMissingLetter";
const Main = () => {
    // count occurences
    // const result =  countOccurenses('Hello hi bye bye' , 'o');  
    // const res1 = countOccurensesUsingForLoop('hello hi bye bye', 'l')
    // const res = titleCase('kungfu pattya')
    // const res = reverseString('Hello')
    // const res = checkPalindrome('mominf');
    // const res  = countVowels('hello hi bye bye');
    // const res = removeDuplicates([1,2,4,3,5,3,5,6,3,6,7,7,8]);
                                //0 1 2 3 4 3 4 7 3 7 10 10 12 index of item arr.indexOf(arr) is 
                                // gonna give us the the first index of which it matches 
                                // if we match that with the actual index we can get the duplicate
                                //0 1 2 3 4 5 6 7 8 9 10 11 12  actual index
    

    // const res = fizzBuzzArray(5);,
    // const res = arrayIntersection([1,2,3,4,5,4,6,9] , [8,4,9,5,6])
    // const res = findMissingNumber([1,2,3,4,5,6,7,8,10])
    const res = findMissingLetter(['c' ,'d' , 'f' ])
    console.log(res);

}

Main();

