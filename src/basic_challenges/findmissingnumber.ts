





export const findMissingNumber  = (arr:number[]):number => {


        const num = arr.reduce((acc:number , cum:number) => acc + cum  ,0)

    return 55 - num;
}