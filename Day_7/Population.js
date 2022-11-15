var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)

request.send();

request.onload = function() {

    var data = JSON.parse(request.response)
    console.log(data)


    var population = data.filter(element => element.population && element.population <= 200000) 
    console.log(population)

   
    }


