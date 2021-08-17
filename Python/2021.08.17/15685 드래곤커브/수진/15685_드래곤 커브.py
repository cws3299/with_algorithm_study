n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
board = [[0]*101 for _ in range(101)]
dx = [1,0,-1,0]
dy = [0,-1,0,1]
for i in range(n):
    x, y, d, g = arr[i]
    case = [d]
    for j in range(g):
        case_reversed = []
        for k in range(len(case)-1,-1,-1):
            if case[k] + 1 == 4:
                case_reversed.append(0)
            else:
                case_reversed.append(case[k]+1)
        case += case_reversed
    board[x][y] = 1
    for j in range(len(case)):
        x += dx[case[j]]
        y += dy[case[j]]
        board[x][y] = 1
cnt = 0
for i in range(100):
    for j in range(100):
        if board[i][j]:
            if board[i][j+1] and board[i+1][j] and board[i+1][j+1]:
                cnt += 1
print(cnt)
