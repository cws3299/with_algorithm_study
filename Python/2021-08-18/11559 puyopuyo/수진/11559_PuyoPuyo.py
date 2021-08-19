from _collections import deque
arr = [list(input()) for _ in range(12)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
visit = [[False] * 6 for _ in range(12)]
def bfs(x,y):
    q = deque()
    q.append((x, y))
    case = [[x,y]]
    cnt = 1
    flag = False
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < 12 and 0 <= ny < 6:
                if arr[x][y] == arr[nx][ny] and not visit[nx][ny]:
                    visit[nx][ny] = True
                    q.append((nx, ny))
                    case.append([nx,ny])
                    cnt += 1
    if cnt >= 4:
        flag = True
        for x, y in case:
            arr[x][y] = '.'
    return flag

def down():
    for i in range(6):
        q = deque()
        for j in range(11,-1,-1):
            if arr[j][i] != '.':
                q.append(arr[j][i])
        for j in range(11,-1,-1):
            if q:
                arr[j][i] = q.popleft()
            else:
                arr[j][i] = '.'
res = 0
while True:
    visit = [[False] * 6 for _ in range(12)]
    check = 0
    for i in range(12):
        for j in range(6):
            if arr[i][j] != '.' and not visit[i][j]:
                visit[i][j] = True
                check += bfs(i,j)
    if not check:
        break
    else:
        res += 1
        down()
print(res)
