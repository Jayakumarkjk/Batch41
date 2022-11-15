var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)

request.send();

request.onload = function() {

    var data = JSON.parse(request.response)
    console.log(data)

   

    data.filter((element)=>{   
        for (let key in element.currencies){
        if(element.currencies[key].key ="USD"){
        console.log(element)
    }
    }
    })
    }


