var array = [1,2,3,4,5,6,7,8,9]
var odd = function (array){
    var result = array.filter(element =>element%2!=0)
    return result;
}
console.log(odd(array))
