class Person {
    constructor(name) {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        console.log("enter child constructor");
        super(name); //to invoke parent class constructor
        console.log("exit child constructor");
    }
    work() {
        super.eat();
        console.log("solve problmes, build something");
    }
}

let engObj = new Engineer("Fousiya");
console.log(engObj.name);
