class Movie {
    constructor (title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(rating == null){
            return this.rating = "PG";
    }
    else {
        return this.rating = rating;
    }  
       
    }
    
    getPG(array){
        var result = array.filter((element) => element.rating=="PG")
        return result 
        
    }
       
   
}
let movie1 = new Movie ("Vikram", "Sathya Studios", "PG13");
let movie2 = new Movie ("Casino Royale", "EON studios");
let movie3 = new Movie ("Beast", "AVM Studios", "PG13");
let movie4 = new Movie ("valimai", "Rathinam Studios");
let movie5 = new Movie ("Hundred", "Aron Studios", "R");

var array = [movie1, movie2, movie3, movie4, movie5]
// console.log(movie1)
// console.log(movie2)
// console.log(movie3)
// console.log(movie4)
// console.log(movie5)   

console.log(movie1.getPG(array));


class Movies {
    constructor (title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

}
let movie6 = new Movies ("Casino Royale", "EON studios", "PG13");
console.log(movie6)