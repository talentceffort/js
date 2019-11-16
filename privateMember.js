let car = {
    fuel: 10, // 연료
    power: 2, // 연비
    total : 0,
    run : function(km) {
        let wasteFuel = km / this.power
        if(this.fuel < wasteFuel) {
            console.log('이동 불가');
            return;
        } 
        this.fuel -= wasteFuel
        this.total += km
    }
}

car.fuel = 50
car.power = 25

console.log(car)

// 위 코드는 문제가 있음. power 와 fuel 에 접근 할 수 있음.
// 임의로 fuel 과 power 에 접근 할 수 없게 코드를 변경해보자.
// Closuer를 사용

// 1, 함수에서 지역변수 및 내부함수 등을 생성.
// 2. 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return
// --> return 한 객체에 포함되지 않은 멤버들은 private 함.
// --> return 한 객체에 포함된 멤버들은 public 함.

let createCar = function(f, p) {
    let fuel = f;
    let power = p;
    let total = 0;
    
    return {
        run : function(km) {
            let wasteFuel = km / power
            if(fuel < wasteFuel) {
            console.log('이동 불가');
            return;
            }    

        fuel -= wasteFuel
        total += km
        }
    }
}

let car2 = createCar(10, 2);


