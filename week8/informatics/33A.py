
def min(n):
    data = n.split()
    temp = int(data[0])
    for i in range(len(data)):
        if(temp > int(data[i])):
            temp = data[i]
    
    return temp

if __name__ == '__main__':
    n = input()
    print(min(n))