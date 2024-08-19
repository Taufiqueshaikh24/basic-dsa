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
import { allCharUnique } from "./basic_challenges/allCharUnique";
import { allCharUniqueUsingForLoop } from "./basic_challenges/allCharUnique";
import { allCharUniqueUsingSet } from "./basic_challenges/allCharUnique";
import { firstNonRepeatingCharacter } from "./basic_challenges/firstNonRepaetingchar";
import { sumOfEvenNumber } from "./HigherOrderMethods/sumOfEvenNumber";
import { validAnagram } from "./HigherOrderMethods/ValidAnagram";
import { reverseStringUsingRecustion } from "./recursion/reverseString";
import { factorial } from "./recursion/factorial";
import { power } from "./recursion/power";
import { arraySum } from "./recursion/arraySum";
import { numberRange } from "./recursion/numberRange";
import { flattenArray } from "./recursion/flattenArray";
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
    // const res = findMissingLetter(['c' ,'d' , 'f' ])
    // const res = allCharUnique('abd');
    // const res = allCharUniqueUsingForLoop('hello');
    // const res = allCharUniqueUsingSet('helo');
    // const res = firstNonRepeatingCharacter('aabbccdeeff');
    // const res = sumOfEvenNumber([1 , 2 , 3 ,4 ,5 , 6 , 7 , 8]);
    // const res = validAnagram('silent' , 'listen');
    // const res = reverseStringUsingRecustion('hello');
    // const res = factorial(5)
    // const res = power(2 , 5);
    // const res = arraySum([1,2,3,4,5])
    // const res = numberRange(1,5);
    const res = flattenArray([1,2,3,4,[5,6,7,8,[10],[11],[12]]])
    console.log(res);

}

Main();

