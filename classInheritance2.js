function Person(name, age) {
    this.name = name
    this.age = age
}

function Employee(name, age, position) {
    this.superClass(name, age)
    this.position = position || '직책 모름'
}

let extendClass = (function(){
    function Bridge() {}
        return function(Parent, Child) {
            Bridge.prototype = Parent.prototype;
            Child.prototype = new Bridge();
            Child.prototype.constructor = Child;
            Child.prototype.superClass = Parent
        }
    
})();

extendClass(Person, Employee)
Employee.prototype.getPosition = function() {
    return this.position
}

let IU = new Employee('아이유', 27, 'Singer')
console.dir(IU)