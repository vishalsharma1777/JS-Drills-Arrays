
const cb = (leftSum, nextElement) => {
    return (leftSum = leftSum + nextElement);
}

function reduce(elements, cb, startingValue) {
    let index = startingValue || 0;
    const current = elements[index];
    let leftSum = current;
    for (let i = index + 1; i < elements.length; ++i) {
        leftSum = cb(leftSum, elements[i])
    }
    return leftSum;
}

export { reduce, cb }

