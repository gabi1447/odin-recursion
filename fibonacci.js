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

// Recursive approach
function fibsRec(sequenceLength) {
    // base case
    if (sequenceLength === 0) {
        return [];
    } else if (sequenceLength === 1) {
        return [0];
    } else if (sequenceLength === 2) {
        return [0, 1];
    }

    // recursive call
    const previousSequence = fibsRec(sequenceLength - 1);
    const length = previousSequence.length;
    return previousSequence.concat(
        previousSequence[length - 2] + previousSequence[length - 1]
    );
}

const result = fibs(10);
console.log(result);

const resultRec = fibsRec(10);
console.log(resultRec);
