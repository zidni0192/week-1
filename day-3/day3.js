/// Nomor 1
let arr = ["nurse srun","makam","kasurrusak","ayam"]
function polindrome(params){
    let arrBol = []
    for(a=0;a<params.length;a++){
        let strReverse = params[a].replace(/\s/, '').split('').reverse().join('')
        if(params[a].replace(/\s/, '') === strReverse){
            arrBol[a] = true
        }else{
            arrBol[a] = false
        }
    }
    return arrBol
}

console.log(polindrome(arr))
/// Nomor 1



/// Nomor 2
let hasill
function tambah(params){
    let hasil = params.reduce((tambah , current ) => tambah + current)
    hasil = hasil.toString().split('')
    for(a=0;a<hasil.length;a++){
        hasil[a]=Number(hasil[a])
    }
    if(hasil.length>1){
        tambah(hasil)
    }else{
        hasill = hasil.map(a=>a)
    }
}

tambah([444,2,55])
console.log(hasill)
/// Nomor 2



/// Nomor 3
let ay = [[1,2,3],[4,5,6],[7,8,9]]
// let ret = ay[2].map((col,i)=>ay.map(row=>row[i]))
// console.table(ret)

function transpose(arr){
    let ret = [];
    for(let i = 0; i < arr.length; i++){
        ret.push([]);
    };

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            ret[j].push(arr[i][j]);
        };
    };

    return ret;
}
console.table(transpose(ay))

// Nomor 3


/// Nomor 4

function multiplyMatrices(m1, m2) {
    if(m1.length !== m2[0].length){
        return "Sorry can't count. Because length of the first matrix field and the second Matrix row is not same "
    }else{
        let result = [];
        for (let i = 0; i < m1.length; i++) {
            result[i] = [];
            for (let j = 0; j < m2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < m1[0].length; k++) {
                    sum += m1[i][k] * m2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }
}

let m1 = [3,4,2]
let m2 = [[7,5],[6,4]]

let mResult = multiplyMatrices(m1, m2)


console.table(mResult) 