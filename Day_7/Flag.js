var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)

request.send();

request.onload = function() {

    var data = JSON.parse(request.response)
    console.log(data)

    data.forEach((element)=> console.log(element.name.common))
    data.forEach((element)=> console.log(element.flag))
    data.forEach((element)=> console.log(element.capital))

  
    }


