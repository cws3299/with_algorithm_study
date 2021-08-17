const dx = [-1, 1, 0, 0, -1, 1, 1, -1]
const dy = [0, 0, -1, 1, 1, 1, -1, -1]



function placeCheck(place) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (place[i][j] === 'P') {
                if (sectionCheck(i, j, place) === false) {
                    return false;                
                }
            }
        }
    }

    return true;
}


function sectionCheck(i, j, place) {
    for (let movePoint = 1; movePoint < 3; movePoint++) {
        for (var k = 0; k < 4; k++) {
            var nx = i + dx[k] * movePoint;
            var ny = j + dy[k] * movePoint;
            if (0 <= nx && nx < 5 && 0 <= ny && ny < 5) {
                if (place[nx][ny] === 'P') {
                    if (place[nx - dx[k]][ny - dy[k]] !== 'X') {
                        return false;
                    }
                }
            }
        }
    }

    for (var k = 4; k < 8; k++) {
        var nx = i + dx[k];
        var ny = j + dy[k];
        if (0 <= nx && nx < 5 && 0 <= ny && ny < 5) {
            if (place[nx][ny] === 'P') {
                if (place[i][ny] !== 'X' || place[nx][j] !== 'X') {
                    return false;
                }
            }
        }
    }

    return true;
}


function solution(places) {
    var answer = [];

    for (let place of places) {
        if (placeCheck(place)) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }

    return answer;
}





console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))

// answer
// [1, 0, 1, 1, 1]
