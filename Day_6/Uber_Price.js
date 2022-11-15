class Uber{
    constructor (distance, rate, waitingperiod){
        this.distance = distance;
        this.rate = rate;
        this.waitingperiod = waitingperiod;
    }
    getPrice(){
        let price = (this.rate*this.distance)+(5*this.waitingperiod)
        return price;
    }
}
let uber = new Uber(250,25,15);

console.log(uber.getPrice())