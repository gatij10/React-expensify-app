function square(x) {
    return x*x;
};




/*const squareArrow = (x) => {
    return x*x;
};*/

const squareArrow = (x) => x*x;


console.log(square(8));
console.log(squareArrow(9));


const fullName = 'Gatij Taranekar';
/*const getFirstname = (fullname) => {
    return fullName.split(' ')[0];
    
 };*/


 const getFirstname = (fullName) => fullName.split(' ')[0]

 console.log(getFirstname(fullName))