function solution(places) {
    var answer = [];
    for (var place of places) {
        var arr = [];
        place = place.map(v=>v.split(''))
        for (var i=0; i<5; i++) {
            for (var j=0; j<5; j++) {
                if (place[i][j] == 'P') {
                    arr.push([i,j])
                }
            }
        }
        var flag = true
        for (var i=0; i<arr.length; i++) {
            var x = arr[i][0];
            var y = arr[i][1];
            // 왼쪽
            for (var j=y-1; j>y-3; j--) {
                if (0 <= j && j < 5) {
                    if (place[x][j] == 'P') {
                        flag = false
                        break
                    }
                    if (place[x][j] == 'X') {
                        break
                    }
                }
            }
            // 오른쪽
            for (var j=y+1; j<y+3; j++) {
                if (0 <= j && j < 5) {
                    if (place[x][j] == 'P') {
                        flag = false
                        break
                    }
                    if (place[x][j] == 'X') {
                        break
                    }
                }
            }
            // 위쪽
            for (var j=x-1; j>x-3; j--) {
                if (0 <= j && j < 5) {
                    if (place[j][y] == 'P') {
                        flag = false
                        break
                    }
                    if (place[j][y] == 'X') {
                        break
                    }
                }
            }
            // 아래쪽
            for (var j=x+1; j<x+3; j++) {
                if (0 <= j && j < 5) {
                    if (place[j][y] == 'P') {
                        flag = false
                        break
                    }
                    if (place[j][y] == 'X') {
                        break
                    }
                }
            }
            // 오른쪽 아래 대각선
            if (0 <= x && x <4 && 0 <= y && x < 4) {
                if (place[x+1][y+1] == 'P') {
                    if (place[x+1][y] != 'X' || place[x][y+1] != 'X') {
                        flag = false
                    }
                }
            }
            // 왼쪽 아래 대각선
            if (0 <= x && x < 4 && 0 < y && y < 5) {
                if (place[x+1][y-1] == 'P') {
                    if (place[x+1][y] != 'X' || place[x][y-1] != 'X') {
                        flag = false
                    }
                }
            }
            if (flag == false) {
                break
            }
        }
        if (flag == true) {
            answer.push(1)
        } else {
            answer.push(0)
        }
    }
    return answer;
}