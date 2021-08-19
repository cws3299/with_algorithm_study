function solution(record) {
  var answer = [];
  var ans = [];
  var res = {};
  for (var i=0; i<record.length; i++) {
      record[i] = record[i].split(' ')
      if (record[i][0] == 'Enter'){
          answer.push([record[i][1],"님이 들어왔습니다."])
          res[record[i][1]] = record[i][2]
      } else if (record[i][0] == 'Leave'){
          answer.push([record[i][1],"님이 나갔습니다."])
      } else {
          res[record[i][1]] = record[i][2]
      }
  }
  for (var i=0; i<answer.length; i++){
      ans.push(res[answer[i][0]]+answer[i][1])
  }
  return ans;
}
solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])