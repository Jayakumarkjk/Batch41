var array = [1,2,3,4,5,6,7,8,9]
var add = (array)=>{
    var result = array.reduce((acc,cv)=>acc+cv)
    console.log(result)
}
add(array)