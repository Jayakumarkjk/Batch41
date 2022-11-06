(function(arr1, arr2){
    var concat = arr1.concat(arr2);
    concat = concat.sort(function(a,b){return a-b});
    console.log(concat);
    var length = concat.length;

    if (length%2 == 1){
        console.log(concat[(length/2)-.5])
        return concat[(length/2)-.5]
    }
    else{
        console.log((concat[length/2]+concat[(length/2)-1])/2)
        return (concat[length/2]+concat[(length/2)-1])/2
    }

})
([1, 4, 5, 6], [2, 3, 7]);
