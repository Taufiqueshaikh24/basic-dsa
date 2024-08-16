



export const countVowels = (str:string):number => {
    let count = 0

    let vowels = 'aeiou'

    let sp = vowels.split('');

    console.log(sp);
    for(let i = 0 ; i < str.length ; i++){
        if(sp.includes(str[i])){
             count++
         }
    }


   
    return count ; 
}