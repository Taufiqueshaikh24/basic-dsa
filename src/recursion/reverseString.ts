


export const reverseStringUsingRecustion = (str:string):string => {

    if(str === ''){
        return '';
    }


   

    return  reverseStringUsingRecustion(str.substring(1)) + str.charAt(0);
}