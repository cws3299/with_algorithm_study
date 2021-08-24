function solution(n, results) {
    var answer = 0;
    let board = []
    
    for (let i=0;i<n;i++) {
        let tmp = []
        for (let i=0;i<n;i++) {
            tmp.push(0)
        }
        board.push(tmp)
    }
    
    for (let result of results) {
        board[result[0]-1][result[1]-1] = 1
        board[result[1]-1][result[0]-1] = -1
    }
    
    for (let c=0;c<n;c++) {
        for (let i=0;i<n;i++) {
            for (let j=0;j<n;j++) {
                if (board[i][c] === 1 && board[c][j] === 1) {
                    board[i][j] = 1
                }
                if (board[i][c] === -1 && board[c][j] === -1) {
                    board[i][j] = -1
                    
                    "1" == 1
                }
            }
        }
    }
    
    console.log(board)
    for (let i=0;i<n;i++) {
        let val = 0
        board[i].map((value) => val = value == 0 ? val+1 : val)
        if (val === 1){
            answer += 1
        }
    }
    return answer;
}
