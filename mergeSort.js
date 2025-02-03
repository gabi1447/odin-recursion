function merge(array1, array2) {
    let sortedArray = [];

    let array1Index = 0;
    let array2Index = 0;

    while (array1Index < array1.length && array2Index < array2.length) {
        if (array1[array1Index] < array2[array2Index]) {
            sortedArray.push(array1[array1Index]);
            array1Index++;
            continue;
        } else {
            sortedArray.push(array2[array2Index]);
            array2Index++;
            continue;
        }
    }

    if (array1Index >= array1.length) {
        const restOfArray = array2.slice(array2Index);
        sortedArray = sortedArray.concat(restOfArray);
    } else {
        const restOfArray = array1.slice(array1Index);
        sortedArray = sortedArray.concat(restOfArray);
    }

    return sortedArray;
}
