class Human {
    constructor(name) {
        this.name = name
    }

    Sleep() {
        console.log(name + ' zzz...')
    }
}

class Student extends Human {
    constructor(name) {
        super(name)
    }

    learn() {
        console.log(name + 'study...')
    }
}

let Jhon = new Student('Jhon')

console.log(Jhon)