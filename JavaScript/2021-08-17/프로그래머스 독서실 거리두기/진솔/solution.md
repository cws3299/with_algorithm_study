```javascript
const move = [[1,0],[0,-1],[-1,0],[0,1]]

function placeCheck(place) {
    for (let i=0; i<5; i++) {
        for (let j=0; j<5; j++) {
            // 강의실 전체탐색
            if (place[i][j] === "P") {
                for (let mi=0; mi<4; mi++) {
                    // 주변 1칸 확인
                    var ni = i+move[mi][0]
                    var nj = j+move[mi][1]
                    if (ni>4||ni<0||nj>4||nj<0) continue
                    if (place[ni][nj] === "P") return 0
                    for (let mj=0; mj<4; mj++) {
                        if (mj === mi+2 || mi === mj+2) continue
                        var nni = ni+move[mj][0]
                        var nnj = nj+move[mj][1]
                        if (nni>4||nni<0||nnj>4||nnj<0) continue
                        if (place[nni][nnj] === "P") {             
                            if(place[ni][nj] !== "X") {
                                return 0
                            }
                        }
                    }
                }
            }
        }
    }
    return 1
}

function solution(places) {
    var answer = [];
    for (let place of places){
        console.log(place)
        answer.push(placeCheck(place))
    }
    return answer;
}
```
