import sys
sys.stdin = open('1874.txt','r')

n = int(input())
ans_data = []
in_data = [i for i in range(1,n+1)]
stack = []
answer = []

for _ in range(n):
    a = int(input())
    ans_data.append(a)


cnt = 0
out = 0
flag = True
while True:
    if len(stack) == 0:
        stack.append(in_data[cnt])
        answer.append('+')
        cnt += 1
    elif len(stack) > 0 and stack[-1] == ans_data[out]:
        stack.pop()
        answer.append('-')
        out += 1
    elif len(stack) > 0 and stack[-1] != ans_data[out]:
        if cnt != n:
            stack.append(in_data[cnt])
            answer.append('+')
            cnt += 1
        else:
            flag = False
            break

    if cnt == n and out == n:
        break


if flag == True:
    for ans in answer:
        print(ans)
else:
    print("No")



