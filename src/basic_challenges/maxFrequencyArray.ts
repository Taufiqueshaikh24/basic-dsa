
function maxFrequency(arr:number) {
    let frequency : { [key:string]:number} = {};
    let maxFreq = 0;
    let maxElem ;

    // Count frequencies
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (frequency[elem] === undefined) {
            frequency[elem] = 1;
        } else {
            frequency[elem]++;
        }

        if (frequency[elem] > maxFreq) {
            maxFreq = frequency[elem];
            maxElem = elem;
        }
    }

    return maxElem;
}

console.log(maxFrequency([1, 2, 2, 3, 3, 3, 4]));
