
class Person{
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    
    getGreeting(){
        //return "Hi. I am " + this.name;
        return `Hi. I am ${this.name}!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        //return `${this.name} is ${this.age} year(s) old, and is a ${this.major} major!`
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greet = super.getGreeting();

        if (this.hasLocation) {
            greet += ` I'm visiting from ${this.homeLocation}!`;
        }

        return greet;
    }
}

const me = new Student("Nima", 23, "Computer Science");
console.log(me.getDescription());



const other = new Student();
console.log(other.getDescription());

const nomad = new Traveler("Joe", 33, "Undeclared", "Canada");
console.log(nomad.getGreeting());