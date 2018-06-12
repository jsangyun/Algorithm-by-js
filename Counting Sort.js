let inputArray = [3,0,2,3,1,1,0,5,4,5,6,8];

const getMax = (array) => {
    let max = 0;
    array.forEach((element) => {
       if(element > max){
           max = element;
       }
    });
    return max;
}

const countingSort = (array) => {
    //숫자를 세줄 배열 생성
    let count = [];
    let result = [];
    for(let i=0; i <= getMax(array); i++){
        count.push(0);
    }
    //숫자 세기
    array.forEach((element) => {
        count[element]++;
    });
    //누적합으로
    for(let i=0; i<count.length - 1; i++){
        count[i+1] += count[i];
    }
    //정렬시작
    for(let i=0; i<inputArray.length; i++){
        result[count[inputArray[i]] - 1] = inputArray[i];
        count[inputArray[i]] -= 1;
    }
    
    return result;
}

console.log(countingSort(inputArray));