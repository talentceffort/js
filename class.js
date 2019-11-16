function Person(name, age) {
    this.name = name
    this.age = age
}

Person.getInformations = function(instance) { return instance}
Person.prototype.getName = function() {return this.name}
Person.prototype.getAge = function() { return this.age}

let gom = new Person('gom', 30);

console.log(gom.getAge())
console.log(gom.getName())

//console.log(gom.getInformations()) //Error

console.log(Person.getInformations(gom))