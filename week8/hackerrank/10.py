#python2.7
N = int(input())
results = {}
for i in range(N):
    a = raw_input().split(' ')
    results[a[0]] = [float(x) for x in a[1:]]
student = raw_input()
print "%.2f" %(sum(results[student])/len(results[student]))
