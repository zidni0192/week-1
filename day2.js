// Nomer 1 

let bio = [
    {
        name:'Tatas',
        company:'Arkademy',
        job:'Trainer',
        status:'single',
        city:'jogja'
    },
    {
        name:'Pratama',
        company:'Emago',
        job:'trainer',
        status:'single',
        city:'jakarta'
    }
]

// Nomer 1

// Nomer 2
let huruf = ['a','b','c','d','e','f','g','h']
let perintah = [true,true,false,false,true,false]
// Nomer 2

// Nomer 4
let data = [
    {
      title: 'Hunger Games',
      isBorrowed: true,
    },
    {
      title: 'Harry Potter',
      isBorrowed: true,
    },
    {
      title: 'Assassins Creed',
      isBorrowed: true,
    },
    {
      title: 'Percy Jackson',
      isBorrowed: true,
    },
    {
      title: 'Fifty Shades of Grey',
      isBorrowed: true,
    },
];
// Nomer 4

// Nomer 1
function nomer1(params){
    let dataArray = params.map(dataArrays => {return {...dataArrays}})

    dataArray.find(dataArrays => dataArrays.name === 'Tatas').status = 'Merried'
    dataArray.find(dataArrays => dataArrays.name === 'Tatas').city = 'Jakarta'
    dataArray.find(dataArrays => dataArrays.name === 'Pratama').job = 'Trainer'
    dataArray.find(dataArrays => dataArrays.name === 'Pratama').company = 'Arkademy'
    dataArray.find(dataArrays => dataArrays.name === 'Pratama').city = 'Jogja'
    return dataArray
}
// Nomer 1

// Nomer 2
function nomer2(params){
    let output = []
    let no = 0
    for(let a=0; a<params.length ; a++){
        if(params[a] === true){
            output[no++]=huruf[a]
        }
    }
    return output.map(a => a)
}
// Nomer 2

// Nomer 3
function nomer3(){
    let nilai = [70,60,65,65,30,40]
    nilai.sort()
    console.log('\nMean : '+cariMean(nilai))    
    console.log('\nMedian : '+cariMedian(nilai))    
    console.log('\nModus : '+cariModus(nilai))    
}

function cariMean(params){
    let mean = params.reduce((tambah , current ) => tambah + current) / params.length
    return mean
}

function cariMedian(params){
    let median = 0
    if(params.length%2 === 0 ){
        median = (params[(params.length/2)-1] + params[Math.ceil(params.length/2)])/2
    }else{
        median = (params[Math.ceil(params.length/2)])
    }    
    return median
}

function cariModus(params) {
    let frekuensiTerbanyak = 0;
    let modus = 0;
    for(let i = 0; i<params.length; i++){
        let frekuensi = 0;
        for(let j = 0; j<params.length; j++){
            if(params[i]===params[j] && i !== j){
                frekuensi++;
                if(frekuensi>frekuensiTerbanyak){
                    frekuensiTerbanyak=frekuensi;
                    modus = i;
                }
            }
        }
    }
    return params[modus];
}
// Nomer 3

// Nomer 4
function a(params){
    return data.find(param => param.title === params).isBorrowed
}

function b(){
    let ret = []
    let no=0
    for(a=0;a<data.length;a++){
        if(data[a].isBorrowed ===true){
            ret[no]=data[a]
            no++
        }
    }
    ret.map(r => r)
    return console.log(ret)
}
// Nomer 4


console.log("\nNumber 1\n")
console.log(nomer1(bio))
console.log("\nNumber 2")
console.log(nomer2(perintah))
console.log('\nNumber 3')
nomer3()
console.log('\nNumber 4')
console.log('A. '+ a("Hunger Games"))
console.log('B. ')
b()
