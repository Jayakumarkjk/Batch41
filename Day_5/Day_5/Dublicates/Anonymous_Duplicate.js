var arr = ["apple", "mango", "apple","orange", "mango", "banana"]
           
    removeDuplicates = function(arr){
        return arr.filter((item, index)=> arr.indexOf(item) === index);

    }
    console.log(removeDuplicates(arr));


    var arr = ["apple", "mango", "apple","orange", "mango", "banana"]
           