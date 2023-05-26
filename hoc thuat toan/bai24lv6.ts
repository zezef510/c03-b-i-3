const arr: number[] = [];
const arraySize = 10000;
const searchValue = 500;

// Tạo mảng gồm 10000 phần tử random từ 1 đến 1000
for (let i = 0; i < arraySize; i++) {
    arr.push(Math.floor(Math.random() * 1000) + 1);
}

// Duyệt qua từng phần tử của mảng và so sánh với giá trị cần tìm
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
        console.log(`Giá trị ${searchValue} được tìm thấy tại vị trí ${i}.`);
        break;
    }
}
