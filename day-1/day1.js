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
let mapArray = arrayOfObject.map(mapItem =>mapItem)
console.log(mapArray)
console.log("\n")

let objNew = {
    name:"ayam",
    bod:"350 september"
}

arrayOfObject.push(objNew)
console.log(arrayOfObject)
console.log("\n")

arrayOfObject.splice(2,1)
console.log(arrayOfObject )
console.log("\n")

arrayOfObject[2].name= "Gorengan"
console.log(arrayOfObject)
console.log("\n")