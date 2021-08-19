function solution(record) {
    var answer = [];
    const stacks = []
    const names = {}
    record.map(function(rec){
        const [act,id,name] = rec.split(" ")
        stacks.push([act,id])
        if (names[id] === undefined){
            names[id] = name
        }else if(act ==='Change'){
            names[id] = name
        }else if(act ==='Enter'){
            names[id] = name
        }

    })
    stacks.forEach(function(stack){
        if (stack[0] === 'Enter'){
            const ans = `${names[stack[1]]}님이 들어왔습니다.`
            answer.push(ans)
        }else if (stack[0] ==="Leave"){
            const ans =  `${names[stack[1]]}님이 나갔습니다.`
            answer.push(ans)
        }
    })
    return answer;
}