function solution(n, results) {
    var answer = 0;

    const winList = Array.from(Array(n + 1), () => new Set());
    const loseList = Array.from(Array(n + 1), () => new Set());

    for (let i = 1; i < n + 1; i++) {
        results.forEach((result) => {
            winList[result[0]].add(result[1]);
            winList[result[1]].forEach((loseToLoser) => {
                winList[result[0]].add(loseToLoser);
            });
            loseList[result[1]].add(result[0]);
            loseList[result[0]].forEach((winToWinner) => {
                loseList[result[1]].add(winToWinner);
            });
        });
    };

    for (let i = 1; i < n + 1; i++) {
        // const info = new Set([...winList[i], ...loseList[i]]);
        // if (info.size === n - 1) {
        //     answer += 1;
        // };
        if (winList[i].size + loseList[i].size == n - 1) {
            answer += 1;
        }
    };

    return answer;
}





console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))

// answer
// 2
