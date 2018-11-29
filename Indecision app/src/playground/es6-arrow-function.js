const square = function(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(5));

//----------------challenge part----------

const getFirstName = (x) => x.split(" ")[0];

const getfirstName = (x) => {
    return x.split(" ")[0];

}
console.log(getFirstName("Nima Movasseghi"));
console.log(getfirstName("Nima Movasseghi"));