const arr: number[] = [];
const arraySize = 10000;
const searchValue = 500;

// Tạo mảng gồm 10000 phần tử random từ 1 đến 1000
for (let i = 0; i < arraySize; i++) {
    arr.push(Math.floor(Math.random() * 1000) + 1);
}

// Sắp xếp mảng theo thứ tự tăng dần
arr.sort((a, b) => a - b);

let low = 0;
let high = arr.length - 1;

while (low <= high) {
    // Tìm vị trí giữa của mảng
    const mid = Math.floor((low + high) / 2);

    // So sánh giá trị tại vị trí giữa với giá trị cần tìm
    if (arr[mid] === searchValue) {
        console.log(`Giá trị ${searchValue} được tìm thấy tại vị trí ${mid}.`);
        break;
    }

    // Nếu giá trị tại vị trí giữa lớn hơn giá trị cần tìm, tiến hành tìm kiếm nhị phân trên nửa đầu của mảng
    if (arr[mid] > searchValue) {
        high = mid - 1;
    }

    // Nếu giá trị tại vị trí giữa nhỏ hơn giá trị cần tìm, tiến hành tìm kiếm nhị phân trên nửa sau của mảng
    if (arr[mid] < searchValue) {
        low = mid + 1;
    }
}
