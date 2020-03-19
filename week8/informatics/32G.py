n = input()
s = input()

data = s.split()
ans = ''

for el in data[::-1]:
    ans += el + ' '

print(ans)