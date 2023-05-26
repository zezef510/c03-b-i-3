function findElementIndices(arr: number[], x: number): number[] {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            indices.push(i);
        }
    }
    return indices;
}
