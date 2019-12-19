var Human = function(name) {
    this.name = name
}

Human.prototype.Sleep = function() {
    console.log(this.name + ' Don"t Sleep')
}

var steve = new Human('steve')

var Student = function(name) {
    Human.apply(this, arguments) //Human.call(this, name)
}

Student.prototype = Object.create(Human.prototype)
Student.prototype.constructor = Student
Student.prototype.learn = function () {
    console.log('study....')
}

Student.prototype.Sleep = function() {
    Human.prototype.Sleep.apply(this)
    console.log('Student zzz...')
}
var Jhon = new Student('Jhon')


Jhon.Sleep()
//console.log(Jhon)

//Jhon.learn()
steve.Sleep()