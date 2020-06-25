
class Person {
    constructor(name = 'Anonymous',age=0) {
        this.name = name
        this.age=age
    }

    getDescription() {
        //return 'Hi. I am ' + this.name  + ' !'
        return `${this.name} is ${this.age} years old.` 
    }
} 

class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major = major
    }

    hasMajor(){
    return !!this.major        
    }

    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor) {
            description = description + ` Their major is ${this.major}`
        }
        return description
    }
}


class Traveller extends Person {
    constructor(name,age,location){
        super(name,age)
        this.location = location
    }

    getDescription(){
        let description = super.getDescription()

        if(this.location){
            description = description + ` Their location is ${this.location}`
        }
        return description
    }
}




const me = new Traveller('Gatij Taranekar',20,'Pune')
console.log(me.getDescription())

const other = new Traveller()
console.log(other.getDescription())