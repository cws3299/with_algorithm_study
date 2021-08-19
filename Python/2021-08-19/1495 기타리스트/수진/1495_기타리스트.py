n, s, m = map(int,input().split())
arr = list(map(int,input().split()))
def sol():
    dp = []
    if 0 <= s + arr[0] <= m:
        dp.append(s+arr[0])
    if 0 <= s - arr[0] <= m:
        dp.append(s-arr[0])
    for i in range(1, n):
        a = set()
        for j in range(len(dp)):
            if 0 <= dp[j] + arr[i] <= m:
                a.add(dp[j]+arr[i])
            if 0 <= dp[j] - arr[i] <= m:
                a.add(dp[j]-arr[i])
        dp = list(a)
    if dp:
        print(max(dp))
    else:
        print(-1)
def sol2():
    dp = [[0]*(m+1) for _ in range(n+1)]
    dp[0][s] = 1
    for i in range(n):
        for j in range(m+1):
            if dp[i][j]:
                if j + arr[i] <= m:
                    dp[i+1][j+arr[i]] = 1
                if 0 <= j - arr[i]:
                    dp[i+1][j-arr[i]] = 1
    ans = -1
    for i in range(m, -1, -1):
        if dp[-1][i]:
            ans = i
            break
    return ans
res = sol2()
print(res)
