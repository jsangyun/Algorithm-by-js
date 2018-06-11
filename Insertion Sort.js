//array
let inputArray = [1,5,2,3,6,7,8,10,9];

//insertion sort
const insertionSort = (array) => {
    for(let j=1; j<array.length; j++){
        let key = array[j];
        let i = j - 1;
        while(i>=0 && array[i] > key){
            array[i+1] = array[i];
            i--;
        }
        array[i+1] = key;
    }
    return array;
}

//log result
console.log(insertionSort(inputArray));
