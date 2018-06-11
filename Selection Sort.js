let inputArray = [1,5,2,3,8,9,4,6,11,10,7];

const selectionSort = (array) => {
    let i = 0;
    let j;
    let minIndex;
    let minKey;
    while(i < array.length){
        minIndex = i;
        j = i+1;
        while(j < array.length){
            if(array[j] <= array[minIndex]){
                minIndex = j;
            }
            j++;
        }
        minKey = array[minIndex];
        array[minIndex] = array[i];
        array[i] = minKey;
        i++;
    }
    return array;
}

console.log(selectionSort(inputArray));