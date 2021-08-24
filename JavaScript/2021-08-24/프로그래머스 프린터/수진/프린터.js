function solution(priorities, location) {
  var answer = 0;
  var arr = [];
  for (var i=0; i<priorities.length; i++){
      arr.push([priorities[i],i])
  }
  var idx = 0
  while (idx < arr.length) {
      var first = arr[idx]
      var m = 0;
      for (var i=idx+1; i<arr.length; i++){
          if (arr[i][0] > m) {
              m = arr[i][0]
          } 
      }
      if (first[0] < m) {
          arr.push(first)
      } else {
          answer += 1
          if (first[1] == location){
              break
          }
      }
      idx += 1
  }
  return answer;
}