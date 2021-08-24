class Deque{
    constructor(){
        this.data = []
        this.rear = 0;
    }

    push_front(item){
        this.data.unshift(item)
        this.rear++
    }
    push_back(item){
        this.data[this.rear] = item
        this.rear++
    }
    pop_front(){
        if (this.rear !== 0){
            this.rear--
            return this.data.shift()
        }
        return null
    }
    pop_back(){
        if (this.rear !== 0){
            this.rear--
            return this.data.pop()
        }
        return null
    }
}


function solution(priorities, location) {
    var answer = 0;
    
    const q = new Deque()
    const cnt = new Array(10).fill(0)
    
    priorities.forEach(function(p,index){
        cnt[p] += 1
        q.push_back([p,index])
        
    })
    
  
    console.log(q)
    
    while (q.rear>0){
        const item = q.pop_front()
        const p = item[0]
        const index = item[1]
        let flag = true

        
        if (p === 9){
            answer++
            cnt[p] -= 1
            if (index === location){
                // console.log(index)
                break
            }
        }else{
            for (let i=p+1; i<10; i++){
                if (cnt[i] > 0){
                    flag = false
                }
            }

            if (flag === false){
                q.push_back([p,index])  
            }else{
                answer++
                cnt[p] -= 1
                if (index === location){
                    // console.log(index)
                    break
                }
            }
            console.log(q,flag)
        }
    }
    
    console.log(answer)
    return answer;  
    
}
