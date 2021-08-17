```javascript
function solution(places) {
    var answer = [];
    const dy = [0,0,1,-1]
    const dx = [1,-1,0,0]
    var dfs_flag = false

    function dfs(y,x,visit,move,arr){
        
        if (move === 3){
            return
        }

        for (let k = 0; k<4; k++){
            const ny = y+dy[k]
            const nx = x+dx[k]

            if(0 <= ny && ny < 5 && 0 <= nx && nx <5){
                if (visit[ny][nx] === 0 && dfs_flag === false ){
                    if (arr[ny][nx] === 'O'){
                        visit[ny][nx] = 1
                        move += 1
                        dfs(ny,nx,visit,move,arr)
                        move -= 1
                        visit[ny][nx] = 0
                    }else if(arr[ny][nx] === 'P'){
                        move += 1
                        if (move <= 2){
                            dfs_flag = true
                            return 
                        }
                        move -= 1
                    }
                }
            }

        }
        return
    }


    
    function caseSolution(place) {
        const arr = []

        place.forEach(function(row){
            const arr_row = row.split('')
            arr.push(arr_row)
        })

        const visit = Array.from(Array(5), () => Array(5).fill(0))
        let flag = 1

        dfs_flag = false
        for (let y=0; y<5; y++){
            for (let x=0; x<5; x++){
                if(arr[y][x] ==='P'){
                    
                    const visit = Array.from(Array(5), () => Array(5).fill(0))
                    visit[y][x] = 1
                    dfs_flag = false
                    dfs(y,x,visit,0,arr)
                }
                if (dfs_flag === true){
                    flag = 0
                    break
                }
            }

            if(flag === 0){
                break
            }
        }
        
        return flag
    }
    
    answer = places.map(function(place){
        const result = caseSolution(place)
        return result
    })
    return answer;
}
```

