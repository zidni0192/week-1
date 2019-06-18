let arrayOfObject = [
    {
        name : "Ahmad",
        bod: "9 mei"
    },
    {
        name : "Rusa",
        bod : " 10 April"
    },
    {
        name : "arie",
        bod : "40 agustus"
    }
]

console.log(arrayOfObject)
console.log("\n")

let objNew = {
    name:"ayam",
    bod:"350 september"
}

arrayOfObject.push(objNew)
console.log(arrayOfObject)
console.log("\n")

arrayOfObject.splice(2,1,{name:"aaaaa",b:"bbbbb"})
console.log(arrayOfObject )
console.log("\n")

arrayOfObject[2].name= "Gorengan"
console.log(arrayOfObject)
console.log("\n")