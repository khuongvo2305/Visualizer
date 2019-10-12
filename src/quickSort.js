function swap(left, right) {
  var temp = left;
  left = right;
  right = temp;
}

function partition(items, left, right) {
  var i = start + 1;
  var pivot = items[Math.floor(left)];
  for(let j = left + 1; j <= right; j++){
    if(items[j] < pivot){
      swap(items[i], items[j]);
      i+=1
    }
  }
  swap(items[left], items[i - 1]);
  return i - 1;
}

export function quickSort(items, left, right) {
  var index;
  if (left < right) {
    index = partition(items, left, right);
    quickSort(items, left, index - 1);
    quickSort(items, index + 1, right);
  }
  return items;
}
