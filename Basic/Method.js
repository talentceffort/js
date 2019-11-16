function Person(n, a) {
    this.name = n
    this.age = a
}

Person.prototype.setOlder = function() {
    this.age += 1
}

Person.prototype.getAge = function() {
    return this.age
}

Person.prototype.age = 100

let gom = new Person('곰', 30);
let iu = new Person('IU', 25);

iu.__proto__.setOlder()
iu.__proto__.setOlder()
gom.__proto__.setOlder()
console.log( iu.__proto__.age)

gom.setOlder()
console.log( gom.getAge() )
