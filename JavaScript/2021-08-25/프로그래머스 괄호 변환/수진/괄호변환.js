function solution(p) {
  var answer = '';
  function check(p){
      var stack = [];
      for (var i of p){
          if (i == '('){
              stack.push('(')
          } else {
              if (stack.length == 0){
                  return false
              }
              stack.pop()
          }
      }
      if (stack.length != 0){
          return false
      }
      return true
  }
  // u,v나누기
  function divied(s) {
      var cnt = [0, 0];
      for (var i of s){
          if (i == '('){
              cnt[0] += 1
          } else {
              cnt[1] += 1
          }
          if (cnt[0] == cnt[1]) {
              break
          }
      }
      const cnt_sum = cnt[0] + cnt[1]
      return [s.slice(0,cnt_sum), s.slice(cnt_sum,s.length)]
  }
  function convert(u) {
      var temp = "";
      for (var i of u){
          if (i == '('){
              temp += ')'
          } else {
              temp += '('
          }
      }
      return temp
  }
  while (p) {
      const res = divied(p)
      var u = res[0]
      p = res[1]
      if (check(u)){
          answer += u
      } else {
          answer += '(' + solution(p) + ')' + convert(u.slice(1,u.length-1))
          break
      }
  }
  return answer;
}