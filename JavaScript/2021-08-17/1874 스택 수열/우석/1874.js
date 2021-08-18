// 파이썬의 경우 정답이나 자바스크립트의 경우 시간초과를 아직 해결하지 못함

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const ans_data = [];
const in_data = [];
const stack = [];
const answer = [];

// console.log(input)

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    const number = input[i].replace(/\s+$/g, "")
    ans_data.push(Number(number))
  }
}


// for (let i = 1; i < count+1; i++){
//     in_data.push(i)
// }

let cnt = 1
let out = 0
let flag = true
let ll = 0

while (true){
  if (ll == 0){
    stack.push(cnt)
    answer.push('+')
    cnt += 1
    ll += 1
  }else if(ll > 0 && stack[ll-1] == ans_data[out]){
    stack.pop()
    answer.push('-')
    out += 1
    ll -= 1
  }else if(ll > 0 && stack[ll-1] != ans_data[out]){
    if (cnt != count+1){
      stack.push(cnt)
      answer.push('+')
      cnt += 1
      ll += 1
    }else{
      flag= false
      break
    }
  }

  if (cnt == count+1 && out == count){
    break
  }
}


if (flag === true){
  answer.forEach(function(ans) {
    console.log(ans)
  })
}else {
  console.log("NO")
}

