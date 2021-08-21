import sys
sys.stdin = open('11403.txt','r')

def floyd():
    global n,arr

    INF = float('inf')
    dist = [[INF]*n for _ in range(n)]

    for y in range(n):
        for x in range(n):
            if arr[y][x] == 1:
                dist[y][x] = arr[y][x]

    for k in range(n):
        for s in range(n):
            for e in range(n):
                if dist[s][e] > dist[s][k]+dist[k][e]:
                    dist[s][e] = dist[s][k]+dist[k][e]

    return dist

n = int(input())
arr = []
for _ in range(n):
    ar = list(map(int, input().split()))
    arr.append(ar)


dist = floyd()

answer = [[0]*n for _ in range(n)]
for y in range(n):
    for x in range(n):
        if dist[y][x] != float('inf'):
            answer[y][x] = 1
        else:
            answer[y][x] = 0

for ans in answer:
    for a in ans:
        print(a , end= ' ')
    print()
