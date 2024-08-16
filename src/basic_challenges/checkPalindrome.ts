


export const checkPalindrome = (str: string):boolean => {
     
        let reverse = str.split('').reverse().join('');

        if(reverse == str){ return true}
    return false;
}


