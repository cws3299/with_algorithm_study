import sys; sys.stdin = open('15685.txt', 'r')

import sys


input = sys.stdin.readline
dx, dy = [1, 0, -1, 0], [0, -1, 0, 1]

def dragon_curve(cnt, tmp_list):
    for generation in range(1, cnt + 1):
        standard = tmp_list[-1]
        for x, y in reversed(tmp_list[:-1]):
            tmp_list.append(((y - standard[1]) * -1 + standard[0], x - standard[0] + standard[1]))
    
    return tmp_list


for tc in range(1, int(input()) + 1):
    N = int(input())
    points = [list(map(int, input().split())) for _ in range(N)]

    arr = [[0] * 101 for _ in range(101)]
    for x, y, d, g in points:
        nx, ny = x + dx[d], y + dy[d]
        point_list = dragon_curve(g, [(x, y), (nx, ny)])

        for i, j in point_list:
            arr[i][j] = 1

    answer = 0
    for i in range(100):
        for j in range(100):
            if arr[i][j]:
                if arr[i + 1][j] and arr[i][j + 1] and arr[i + 1][j + 1]:
                    answer += 1

    print(answer)
