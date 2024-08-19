





export const numberRange = (startNum: number, endNum: number): number[] => {
    if (startNum > endNum) {
        return [];
    }
    if (startNum === endNum) {
        return [startNum];
    }
    
    const num = numberRange(startNum, endNum - 1);
    num.push(endNum);
    return num;
};
