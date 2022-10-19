// now we are going to know about the map function 
let number=[1,2,3,4,5,6,7,8,9]
for(i=0;i<=number.length;i++){
    console.log(number[i]*number[i])
}
// number.map((i)=>{
// console.log(i)
// })
let square=number.map((x)=>{
    return x*x
})
console.log(square)
let cube=number.map((x)=>{
    return x*x*x
})
console.log(cube)
// now we are going to know about the filters concept
let numberGreaterThan5=number.filter((x)=>{
    if (x>5){
        return x
    }
})
console.log(numberGreaterThan5)
// we are going to know about the combinations of the map and filter functions both together

let greaterThan100InCube=number.map((x)=>{
    return x*x*x
}).filter((x)=>{
    if (x>100){
        return x
    }
})
console.log(greaterThan100InCube)
// now we are going to know the reduces concept
let values=[1,34,56,77,2,89,99,22,105,33]
// console.log(values)
// console.table(values)
let maximum= values.reduce((max,curr)=>{
    // logic for the finding maximum number in the array
    if(curr>max){
        max=curr
    }
    return max
},0)
console.log(maximum)