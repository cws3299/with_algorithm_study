class Deque {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }

    push_front(item) {
        if (this.arr[0]) {
            for (let i = this.arr.length; i > 0; i--) {
                this.arr[i] = this.arr[i - 1];
            }
        }
        this.arr[this.head] = item;
        this.tail++;
    }

    push_back(item) {
        this.arr[this.tail++] = item;
    }

    pop_front() {
        if (this.head >= this.tail) {
            return null;
        } else {
            const result = this.arr[this.head];
            this.arr = this.arr.slice(1);
            this.tail--;
            return result;
        }
    }

    pop_back() {
        if (this.head >= this.tail) {
            return null;
        } else {
            const result = this.arr[--this.tail];
            this.arr = this.arr.slice(0, this.arr.length - 1);
            return result;
        }
    }
}


function solution(priorities, location) {
    var answer = 0;

    let deq = new Deque();
    let order = new Deque();
    for (let i = 0; i < priorities.length; i++) {
        deq.push_back(priorities[i]);
        order.push_back(i);
    }
    
    const orderedList = [];
    while (deq.arr) {
        if (deq.arr.length === 1) {
            orderedList.push(order.arr[0]);
            break;
        }

        let priority = deq.pop_front();
        let num = order.pop_front();
        let max_priority = deq.arr.reduce(function(previous, current) {
            return previous > current ? previous : current;
        })
        if (priority >= max_priority) {
            orderedList.push(num);
        } else {
            deq.push_back(priority);
            order.push_back(num);
        }
    }

    for (let i = 0; i < orderedList.length; i++) {
        if (orderedList[i] === location) {
            answer = i + 1;
        }
    }

    return answer;
}




console.log(solution([2, 1, 3, 2], 2))
console.log(solution([1, 1, 9, 1, 1, 1], 0))

// answer
// 1
// 5
