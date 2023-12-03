function findMinimum(array) {
    if (array.length === 0) {
        return null;
    }

    let minimum = array[0];

    for (let number of array) {
        if (number < minimum) {
            minimum = number;
        }
    }

    return minimum;
}

function findMaximum(array) {
    if (array.length === 0) {
        return null;
    }

    let maximum = array[0];

    for (let number of array) {
        if (number > maximum) {
            maximum = number;
        }
    }

    return maximum;
}

function findMinAndMax(array) {
    const minimum = findMinimum(array);
    const maximum = findMaximum(array);

    return [minimum, maximum];
}

// Приклад використання функцій:
const myArray = [3, 1, -9, -3, 2, 8];
const minimum = findMinimum(myArray);
const maximum = findMaximum(myArray);
const [min, max] = findMinAndMax(myArray);

console.log(`Minimum number: ${minimum}`);
console.log(`Maximum number: ${maximum}`);
console.log(`Minimum and maximum numbers: Minimum - ${min}, Maximum - ${max}`);
