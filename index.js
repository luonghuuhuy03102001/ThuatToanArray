// dồn mảng 1 chiều trong mảng có chứa đối tượng x y , x y có chứa giá trị index cần dồn 

var arr = [{}, null, null, {}, null, {}];
// mảng ban đầu
function mangBanDau(arr) {
    let index;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] != null) {
            index = k;
            arr[k] = index;
        }
    }
    return arr;
}

let result = mangBanDau(arr);
console.log(result);

// btn sử lý mảng
function xulymang(arr) {
    let emptyIndex = -1;
    let index;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == null) {
                emptyIndex = i;
                break;
            }
        }
        if (emptyIndex !== -1) {

            for (let i = emptyIndex; i < arr.length - 1; i++) {
                i = i + 1;
            }
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] != null) {
                    index = k;
                    arr[k] = index;
                }
            }
            arr[arr.length - 1] = null;
        }
        return arr;
    }

// btn dồn mảng
function donMang1ChieuCoXY(arr) {

    let emptyIndex = -1;
    let index;
    for (let j = 0; j < arr.length; j++) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == null) {
                emptyIndex = i;
                break;
            }
        }
        if (emptyIndex !== -1) {

            for (let i = emptyIndex; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];

            }
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] != null) {
                    index = k;
                    arr[k] = index;
                }
            }
            arr[arr.length - 1] = null;
        }
    }
    return arr;
}


btnSauXuLy.onclick = function () {
    var result = xulymang(arr)
    console.log(result);
};

btnDonVeDuoi.onclick = function () {
    var result = donMang1ChieuCoXY(arr);
    console.log(result);
};