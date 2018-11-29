var nameVar = 'Nima';

console.log('nameVar', nameVar);

let name = 'Jen';

console.log("namelet", name);

const nameConst = "Joe";

console.log("nameConst", nameConst);

//block scoping

var fullName = "Nima Movasseghi";

if (fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}