class person {
    constructor (name, age, gender, qualification, designation, contact){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.designation = designation;
        this.contact = contact;

    }
   
}
let person1 = new person ("Vijay", "25", "male", "MBA", "Creative Designer", "email");
console.log(person1)