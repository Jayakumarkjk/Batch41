(function(value){
    array = [];{ 
   for(const str of value){ 
    const output=str.split('').reverse().join('')
        if(output===str){
            array.push(output)  
           }
        }
       }
       console.log(array)
})
(['madam','doctor','level','racecar','chess']);