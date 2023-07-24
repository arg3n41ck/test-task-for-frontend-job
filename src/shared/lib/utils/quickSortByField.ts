type CompareFunction<T> = (a: T, b: T) => number;

const quickSortByField = <T>(arr: T[], compareFn: CompareFunction<T>): T[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (compareFn(arr[i], pivot) < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...quickSortByField(left, compareFn),
    pivot,
    ...quickSortByField(right, compareFn),
  ];
};

export default quickSortByField;
