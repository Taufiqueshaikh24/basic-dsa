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
import { permutations } from "./recursion/permutations";
import { wordCountFrequency } from "./Maps/wordCountFrequency";
import { AnagramGrouping } from "./Maps/AnagramGrouping";
import { symettricDifference } from "./Maps/symmetricDifference";
import { twoSum } from "./Maps/twoSum";
import { BubbleSort } from "./Sorting/BubbleSort";
import { BubbleSortUsingOneLoop } from "./Sorting/BubbleSortUsing1Loop";
import { InsertionSort } from "./Sorting/InsertionSort";
import { SelectionSort } from "./Sorting/SelectionSort";
import { MergeSort } from "./Sorting/MergeSort";
import { QuickSort } from "./Sorting/QuickSort";
import { Stack } from "./Stack/Stack";
import { reverseStrinUsingStack } from "./Stack/reverseUsingStack";
import { BalancedParenthesis } from "./Stack/BalancedParenthesis";
import { Queue } from "./Queue/queue";
import { reverseStrinUsingQueue } from "./Queue/reverseStringUsingQueue";
import { palindromeWithQueue } from "./Queue/PalindromeWithQueue";

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
    // const res = flattenArray([1,2,3,4,[5,6,7,8,[10],[11],[12]]])
    // const res = permutations('abc');
    // const res = wordCountFrequency('hello hi bye bye');
    // const res = AnagramGrouping(['cat','act','tac' , 'dog' , 'odg']);
    // const res = symettricDifference([1,2,3] , [3 ,4 ,5]);
    // const res = twoSum([2,7,11,15], 17);
    // const res = LongestConsecutiveNumber([10,1,2,3,4,7]);
    // const res = BubbleSort([9,7,6,5,4,3,2,1]);
    // const res = BubbleSortUsingOneLoop([43,546,77,4,3,5,78,])
    // const res = InsertionSort([435,32,5,553,56,2,57,2])
    // const res  = SelectionSort([33,2,4,3,5,72,56,67,7])
    // const res = MergeSort([23,4,5,6,7,445,24])
    // const res  = QuickSort([35,3,5,22,6,43,53,2,34,])
    // const res = reverseStrinUsingStack('Hello hi bye bye')
    // const res = BalancedParenthesis('()()')
    // const res = reverseStrinUsingQueue('Hellow Hie Bie Bie');
    const res = palindromeWithQueue('radar');
    console.log(res);

}

Main();


// const stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.peek())
// console.log(stack);
