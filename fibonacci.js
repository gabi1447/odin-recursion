// Iterative approach
function fibs(sequenceLength) {
    if (sequenceLength < 0) {
        return [];
    }

    let sequenceArray = [];

    for (let i = 0; i < sequenceLength; i++) {
        if (i === 0) {
            sequenceArray.push(0);
            continue;
        } else if (i === 1) {
            sequenceArray.push(1);
            continue;
        }
        const nextNumber = sequenceArray[i - 1] + sequenceArray[i - 2];
        sequenceArray.push(nextNumber);
    }

    return sequenceArray;
}
