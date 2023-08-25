// dồn mảng 1 chiều trong mảng có chứa đối tượng x y , x y có chứa giá trị index cần dồn 

var arr = [{"x":0},{"x":0},{"x":0}, null, null, {"x":0}, null,{"x":0},null, null, {"x":0},];

console.log(arr);
let empty = 0;
function xulymang(arr)  {
    for(let i =0; i<arr.length; i++) 
    {
        if(empty!=0&&arr[i]!=null)
        {
            arr[i].x=i-empty;
        }
        if(arr[i]==null)
        {
            empty++;
        }
    }
    return arr;
}
btnSauXuLy.onclick = function () {
    var result = xulymang(arr)
    console.log(result);
};

// btn dồn mảng
function donMang1ChieuCoXY(arr) {
    for(let i =0; i<arr.length; i++) 
    {
        if(arr[i]!=null&&arr[i].x!=0) 
        {
            arr[arr[i].x] = arr[i]; 
            arr[i]=null;
        }
    }
    return arr;
}

btnDonVeDuoi.onclick = function () {
    var result = donMang1ChieuCoXY(arr);
    console.log(result);
};