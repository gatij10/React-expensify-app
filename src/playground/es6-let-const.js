var nameVar = 'Gatij';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jenn';
nameLet = 'Julie';
console.log('nameLet',nameLet)


const nameConst = 'Frank';
//nameConst = 'Gunther';
console.log('nameConst',nameConst);



function getPetName() {
    const petName = 'Hal';
    return petName;
}


const petName = getPetName();
console.log(petName)


//const and let are block level scope

 var fullName = 'Gatij Taranekar';

if(fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName)
}


const getFirstname = (fullname) => {
   return fullName.split(' ')[0];
   
}




console.log(firstName)