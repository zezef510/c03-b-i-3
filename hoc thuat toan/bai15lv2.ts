const a = [1, 2, 3, 4];
const b = [2, 4, 6, 8];

// @ts-ignore
const result = a.filter(item => !b.includes(item));

if(result.length === 0){
    console.log("Tất cả các phần tử trong mảng a đều nằm trong mảng b.");
} else {
    console.log("Một số phần tử trong mảng a không nằm trong mảng b:", result);

}
