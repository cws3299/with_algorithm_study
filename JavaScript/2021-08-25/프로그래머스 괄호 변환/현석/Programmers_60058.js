function check(u) {
    const tempArr = [];
    // console.log(u)
    u = u.split("");
    for (let str of u) {
        if (str === '(') {
            tempArr.push(str);
        } else {
            if (tempArr.length) {
                tempArr.pop();
            } else {
                return false;
            }
        }

    }
    if (tempArr.length) {
        return false;
    } else {
        return true;
    }
}


function divide(v) {
    let temp = 0;
    let index = 0;
    for (index; index < v.length; index++) {
        let val = v[index];
        // console.log(val, index, '디바이드 포문 도는중')
        if (val === '(') {
            temp += 1;
        } else if (val === ')') {
            temp -= 1;
        }

        if (temp === 0) {
            // console.log(index, v.slice(0, index + 1), v.slice(index + 1), '나누기전')
            // return v.slice(0, index + 1), v.slice(index + 1);
            break
        }
    }
    return [v.slice(0, index + 1), v.slice(index + 1)];
}


function solution(p) {
    // var answer = '';

    if (p === '' || check(p)) {
        return p;
    }

    let [u, v] = divide(p);
    // console.log(u, v, '나눈 결과')
    if (check(u)) {
        // console.log('check 통과')
        let answer = solution(v);
        // console.log(u, answer, '결과 더하기')
        return u + answer; 
    } else {
        // console.log('check 통과 못함')
        let answer = '(';
        answer += solution(v);
        answer += ')';
        // console.log(u, answer, 'u더하기')
        let slicedS = u.slice(1, u.length - 1);
        // console.log(slicedS, '슬라이스한거')
        for (let i = 0; i < slicedS.length; i++) {
            if (slicedS[i] === '(') {
                answer += ')';
            } else {
                answer += '(';
            }
        }
        // console.log(answer, 'u더하기 직전')
        return answer;
    }

    // return answer;
}




console.log(solution("(()())()"))
console.log(solution(")("))
console.log(solution("()))((()"))

// answer
// "(()())()"
// "()"
// "()(())()"
