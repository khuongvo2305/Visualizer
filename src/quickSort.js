function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right){
    var pivot = items[Math.floor((right + left)/2)],
    i = left,
    j = right;
    while(i <= j){
        while (items[i] < pivot){
            i++;
        }
        while (items[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right){
    var index;
    if (items.lenght > 1){
        index = partition(items, left, right);
        quickSort(items, left, index - 1);
        quickSort(items, index + 1, right);
    }
    return items;
}

