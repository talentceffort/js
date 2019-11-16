function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.getName = function() {
    return this.name
}

Person.prototype.getAge = function() { 
    return this.age
}

function Employee(name, age, position) {
    this.name = name || '이름 모름'
    this.age = age || '나이 모름'
    this.position = position || '직책 모름'
}

// Employee.prototype = new Person();
// Employee.prototype.constructor = Employee;
// Employee.prototype.getPostion = function() {
//     return this.position
// }

function Bridge() {}
Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee

Employee.prototype.getPosition = function() {
    return this.position
}

let gom = new Employee('곰', 30, 'CEO')
console.dir(gom) 