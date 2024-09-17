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
import { LinearSearch } from "./searchingAlgos/LinearSearch";
import { BinarySeach } from "./searchingAlgos/BinarySearch";
import { LinkedList } from "./LinkedList/linkedlist";
import MaxSubArray from "./basic_challenges/findMaxSubArray";
import findMaxSubArrayUsingSlidingWindowTechnique from "./basic_challenges/MaxSubArrayWithSlidingwindow";
import reverseStrinUsingLinkedList from "./LinkedList/reverseStringUsingLinkedList";
import {  twoCrystalBalls } from "./basic_challenges/TwoCrystalBalls";
import { Queue2 } from "./Queue/Queue2";
import { Stack2 } from "./Stack/stack2";

import Solve from "./recursion/MazeSolver";
import Quicksort2 from "./Sorting/Quicksort2";
import { DoublyLinkedList } from "./DoublyLinkedList/DoublyLinkedList";
import preOrder, { BinaryNode } from "./Stack/Trees/PreOrderTraversal";
import DFSSearch from "./Stack/Trees/DFSsearch";
import { MinHeap } from "./Heap/MinHeap";
import dfs, { AdjancyList } from "./Graph/AdjancyList";

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
    // const res = palindromeWithQueue('radar');
    // const res = LinearSearch([23,45,4,69] , 69)
    // const  res = BinarySeach([1,2,3,4,5,6,7,8,9,10] , 10);
    // const res = MaxSubArray([3,4,5,2,34,4,56,3], 3)
    // const res = findMaxSubArrayUsingSlidingWindowTechnique([3,4,5,3,2,3,45] , 3);
    // const res = reverseStrinUsingLinkedList('Hemlo')
    // const res  = twoCrystalBalls([false, false , false , true ,true , true]);
        // const res = Quicksort2([43,546,77,4,3,5,78,])
    //     const res = new BinaryNode(1, new BinaryNode(2), new BinaryNode(3));
    // console.log(preOrder(res));
    // Example usage
const root = new BinaryNode(10, new BinaryNode(5), new BinaryNode(15));
console.log(DFSSearch(root, 10)); // Output: true

const graph: AdjancyList = [
    [{ to: 1, weight: 1 }, { to: 2, weight: 1 }],
    [{ to: 3, weight: 1 }],
    [{ to: 3, weight: 1 }],
    []
];

const source = 0;
const needle = 3;
const result = dfs(graph, source, needle);

console.log(result,'res'); // Output the path 


}

Main();


const dlist  = new DoublyLinkedList();

dlist.append(1);
dlist.append(2);

console.log(dlist);


const h = new MinHeap();

h.insert(1);
h.insert(12);
h.insert(13);
h.delete(1);
h.delete(1);
h.delete


console.log(h);

// const list = new LinkedList<number>();

// list.add(100);
// list.add(200);
// list.add(300);
// list.add(400);
// list.add(500);
// list.insertAt(2400, 3);
// list.removeAt(3);
// list.printAll();



// const stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.peek())
// console.log(stack);



// const q  = new Queue2();

// q.enqueue('Taufique');
// q.enqueue('Asif');
// q.enqueue('Someone');
// q.enqueue('No One');
// q.dequeue();

// console.log(q.peek());

// console.log(q);


// const stack = new Stack2();


// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.pop();
// stack.pop();

// console.log(stack.peek());

// console.log(stack);



// type Point = {
//      x: number,
//      y:number
// }

// const maze = [
//     '....',
//     '.##.',
//     '....',
//     '....'
// ];


// const maze2 = [
//     "xxxxxxxxxx x",
//     "x        x x" ,
//     "x        x x" ,
//     "x xxxxxxxx x" ,
//     "x          x" ,
//     "x xxxxxxxxxx",
    
// ]

// const wall2 = 'x';

// const start2 : Point = { x:10 ,y:0};
// const end2 : Point = { x:1 ,y:5};


// const wall = '#';
// const start: Point = { x: 0, y: 0 };
// const end: Point = { x: 3, y: 3 };

// // const path = Solve(maze, wall, start, end);

// const path2 = Solve(maze2 , wall , start2 , end2);
// console.log(path2);
