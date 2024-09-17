function uncommonFromSentences(s1: string, s2: string): string[] {
    const wordCount: { [key: string]: number } = {};
    
    // Split both sentences into words and count occurrences
    const words = s1.split(' ').concat(s2.split(' '));
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Filter words that appear exactly once
    return Object.keys(wordCount).filter(word => wordCount[word] === 1);
}

// Example usage:
const s1 = "this apple is sweet";
const s2 = "this apple is sour";
console.log(uncommonFromSentences(s1, s2)); // Output: ["sweet", "sour"]
