var array = [1,3,4,5,7,8,9,]
 const rotateKtimes = function(array,k){
    for(let i=0; i<k; i++){
       console.log(array.unshift(array.pop()));
       console.log(array)

    }
    
  }
 rotateKtimes(array, 2);