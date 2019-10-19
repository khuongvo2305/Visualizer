import React from 'react';
import ArrayItem from './Components/ArrayItem';
export let ArrayAnimate =[];
export let listIndex = [];
export let arrback =[];

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function partition(arr, pivot, left, right){
     arrback.push(arr[pivot]);
      var pivotValue = arr[pivot],
       partitionIndex = left;
      // arrback.push([...arr]);
      // arrback[arrback.length-1] = arrback[arrback.length-1].map(e=>{
      //   return(
      //     <ArrayItem value ={e}></ArrayItem>
      //   )
      // })
      // arrback[arrback.length-1][pivot]=(<ArrayItem ispivot={true} value ={arr[pivot]}></ArrayItem>)
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
    //arrback.push(pivot);
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