var land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]] //16

function solution(land) {
    var answer = 0;
    var now_index = 0

    land.map((item, index) => {
        var max = Math.max(...item.slice(0, 3))
        var max_index = item.indexOf(max)
        
        console.log(max_index)

       

    })
}

solution(land)