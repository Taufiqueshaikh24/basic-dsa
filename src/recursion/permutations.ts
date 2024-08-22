



export const permutations = (str:string):string[] => {

    let mutate:string[] = [];

        if(str.length === 0 ){
            return [''];
        }


        for(let i = 0 ; i < str.length ; i++){
            let firstChar = str[i];
            const restOftheString = str.slice(0 , i ) + str.slice( i + 1);
            const subpermutations = permutations(restOftheString);
            for(let j = 0 ; j < subpermutations.length ; j++){
                 mutate.push(firstChar + subpermutations[j]);
            }
        }

    return mutate;
}


