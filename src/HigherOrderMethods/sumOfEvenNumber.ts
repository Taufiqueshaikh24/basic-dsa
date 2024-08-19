




export const sumOfEvenNumber = (arr:number[]):number => {

      const num = arr.filter((num) => num % 2 === 0 )
           .map((n) => n ** 2 )
           .reduce((acc , curr) => acc + curr ,0);
      return num;
}