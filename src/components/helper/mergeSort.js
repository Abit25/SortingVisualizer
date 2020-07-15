export var mergeSort = (array) => {
  var animations = [];
  var auxArray = array.slice();
  mergeSortHelper(array, auxArray, 0, array.length - 1, animations);
  //   console.log.apply(console, array);
  return animations;
};

var mergeSortHelper = (mainArray, auxArray, start, end, animations) => {
  if (start == end) {
    return;
  }

  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    mergeSortHelper(auxArray, mainArray, start, mid, animations);
    mergeSortHelper(auxArray, mainArray, mid + 1, end, animations);

    var i = start;
    var j = mid + 1;
    var k = start;

    while (i <= mid && j <= end) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxArray[i] < auxArray[j]) {
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
      } else {
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
      }
    }
    while (i <= mid) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    }
    while (j <= end) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }
};

// mergeSort([2, 5, 1, 7, 8, 1, 2, 100, 5]);
