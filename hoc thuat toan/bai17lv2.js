function longestIncreasingSubarray(arr) {
    let maxLength = 1;
    let currLength = 1;
    let endIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currLength++;
        } else {
            if (currLength > maxLength) {
                maxLength = currLength;
                endIndex = i - 1;
            }
            currLength = 1;
        }
    }

    if (currLength > maxLength) {
        maxLength = currLength;
        endIndex = arr.length - 1;
    }

    const startIndex = endIndex - maxLength + 1;
    return arr.slice(startIndex, endIndex + 1);
}

const arr = [1,2,3,4,5,6,7,1,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8,9];
const longestSubarray = longestIncreasingSubarray(arr);

console.log(longestSubarray); // Output: [1, 2, 3, 4, 5, 6, 7]
