function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤 뒷부분 조합구하기
    const combinations = getCombinations(rest, selectNumber - 1); 
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
  });

  return results; 
}
function solution(infos, querys) {
  var answer = [];
  var obj = {'num': [0]};
  for (var info of infos){
      info = info.split(' ')
      var score = parseInt(info[info.length-1])
      info = info.slice(0,info.length-1)
      obj['num'].push(score)
      for (var i=0; i<5; i++){
          var combi = getCombinations(info,i)
          for (var target of combi){
              target = target.join('')
              if (target in obj){
                  obj[target].push(score)
              } else {
                  obj[target] = [];
                  obj[target].push(score)
              }
          }
      }
  }
  for (var key in obj){
      obj[key].sort((a,b)=>a-b)
  }
  for (var query of querys){
      query = query.split(' ')
      var query_score = parseInt(query[query.length-1])
      query = query.slice(0,query.length-1)
      for (var i=0; i<3; i++){
          const idx = query.indexOf('and')
          if (idx > -1) {
              query.splice(idx,1)
          }
      }
      while (query.indexOf('-') > -1) {
          const idx2 = query.indexOf('-')
          query.splice(idx2,1)
      }
      query = query.join('')
      if (query in obj || query.length == 0){
          if (query.length == 0){
              query = 'num'
          }
          if (obj[query].length >= 0){
              let left = 0;
              let right = obj[query].length;
              while (left < right){
                  let mid = parseInt((left+right)/2)
                  if (obj[query][mid] < query_score){
                      left = mid + 1
                  } else {
                      right = mid
                  }
              }
              answer.push(obj[query].length-left)
              
          } 
      } else {
          answer.push(0)
      }

  }
  return answer;
}