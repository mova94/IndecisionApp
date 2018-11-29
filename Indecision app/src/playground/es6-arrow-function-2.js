// argument object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

// this keyword - no longer bound

const user = {
    name: "Nima",
    cities: ["pleasanton", "orlando"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);


    //     console.log(this.name);
    //     console.log(this.cities);

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city)
    //     });
    }
};

console.log(user.printPlacesLived());

//-----------------challenge-------------------


const multiplier = {
    numbers: [1, 5, 10],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy  );
    }
};

console.log(multiplier.multiply());