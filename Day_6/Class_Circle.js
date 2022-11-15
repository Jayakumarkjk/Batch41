class Circle{
    constructor (radius, color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        console.log(this.radius)
}
    getColor(){
        console.log(this.color)
}
    getArea(){
        console.log(Math.PI * this.radius * this.radius)
}
    getCircumference(){
        console.log(2* Math.PI * this.radius)
}
}
let circle = new Circle (2.0, "red");

circle.getRadius();
circle.getColor();
circle.getArea();
circle.getCircumference();