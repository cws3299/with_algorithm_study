function solution(n, results) {
  var answer = 0;
  var arr = new Array(n);
  for (var i=0; i<n; i++){
      arr[i] = new Array(n);
  }
  for (var res of results){
      var x = res[0];
      var y = res[1];
      arr[x-1][y-1] = 'win';
      arr[y-1][x-1] = 'lose';
  }
  for (var k=0; k<n; k++){
      for (var i=0; i<n; i++){
          for (var j=0; j<n; j++){
              if (arr[i][k] == 'win' && arr[k][j] == 'win'){
                  arr[i][j] = 'win'
              }
              if (arr[i][k] == 'lose' && arr[k][j] == 'lose'){
                  arr[i][j] = 'lose'
              }
          }
      }
  }
  for (var i=0; i<n; i++){
      let cnt1 = arr[i].filter(e => 'win' === e).length;
      let cnt2 = arr[i].filter(e => 'lose' === e).length;
      if (cnt1+ cnt2 === n-1){
          answer += 1
      }
  }
  return answer;
}