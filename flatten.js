function flatten(elements) {
    const flattenedArray = [];

    function recursiveFlatten(arr) {
        for (let i =0;i<arr.length;i++) {
            if (Array.isArray(arr[i])) {
                recursiveFlatten(arr[i]);
            } else {
                flattenedArray.push(arr[i]);
            }
        }
    }

    recursiveFlatten(elements);
    return flattenedArray;
}

export default flatten;