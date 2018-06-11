let inputArray = [1,5,2,3,8,9,4,11,10];

const Merge = (left, right) => {
    let merge = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            merge.push(left.shift());
        }else{
            merge.push(right.shift());
        }
    }
    
    //남은 원소 처리
    while(left.length) merge.push(left.shift());
    while(right.length) merge.push(right.shift());
    
    return merge;
};

const MergeSort = (array) => {
    let middle;
    let left = [];
    let right = [];
    //원소가 1개만 남았을 때 재귀를 멈춤
    if(array.length <= 1){
        return array;
    }
    middle = Math.floor((array.length)/2);
    left = array.slice(0,middle);
    right = array.slice(middle, array.length);
    left = MergeSort(left);
    right = MergeSort(right);
    
    return Merge(left, right);
};

console.log(MergeSort(inputArray));