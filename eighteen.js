class Person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("work");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problmes, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat patients");
    }
}

let fousiya = new Engineer();
let anu = new Doctor();
