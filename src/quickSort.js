
export let ArrayAnimate =[];
export let listIndex = [];
export let arrback =[];

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      addIndex('swap');
      swap(arr, i, partitionIndex);
      ArrayAnimate.push([...arr]);
      partitionIndex++;
    }
  }
  addIndex('swap');
  swap(arr, right, partitionIndex);
  ArrayAnimate.push([...arr]);
  return partitionIndex;

}

function addIndex(index){
  listIndex.push(index);
}
export function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;

   addIndex(1);
   addIndex(2);
  if(left < right){

    pivot = right;
    addIndex(3);
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   addIndex(4);
   quickSort(arr, left, partitionIndex - 1);
   addIndex(5);
   quickSort(arr, partitionIndex + 1, right);

  }
  console.log(ArrayAnimate);
  return arr;
}