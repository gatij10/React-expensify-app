//argument object - no longer bound with arrow function

const add = function(a,b) {
    return a+b;
};

console.log(add(8,9));

/*const user = {
    name: 'Gatij',
    cities: ['pune','indore','mumbai'],
    printPlacesLived() {
        return this.cities.map((city) => {return this.name + ' has lived in ' + city}
)
    }
};

console.log(user.printPlacesLived())*/

const multiplier = {
    numbers: [8,9,7],
    multiplyby: 10,
    printProduct(){
        return this.numbers.map((number) => {return this.multiplyby * number})
    }
}

console.log(multiplier.printProduct())