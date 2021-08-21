function solution(orders, course) {
    var answer = [];
    for (var k of course){
        var ans = {};
        for (var order of orders) {
            if (order.length >= k){
                let l = order.split('')
                l.sort()
                let n = l.length
                let r = k
                dfs(0, [])
                // combination
                function dfs(idx, list){
                    if (list.length == k){
                        if (list in ans){
                            ans[list] += 1
                        } else{
                            ans[list] = 1
                        }
                        return
                    }
                    for (var i=idx; i<n; i++){
                        dfs(i+1,list+[l[i]])
                    }
                }
            } 
        }
        let sortobj = [];
        for (let number in ans) {
            if (ans[number] > 1){
                sortobj.push([number, ans[number]]);
            }
        }
        
        sortobj.sort(function(a, b) {
          return b[1] - a[1];
        });
        if (sortobj.length > 0) {
            let l = sortobj[0][1]
            for (var i=0; i<sortobj.length; i++){
                if (l == sortobj[i][1]){
                    answer.push(sortobj[i][0])
                }else{
                    break
                }
            }
        }

    }
    return answer.sort();
}