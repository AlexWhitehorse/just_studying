import random

def getList_int(size, min, max):
    arr = []
    while len(arr) <= size:
        arr.append(random.randint(min, max))
    return arr

def sortList_increase(arr):
    return sorted(arr)

def findDiff(sortedArr):
    min = sortedArr[0]
    max = sortedArr[len(sortedArr) -1]
    return max - min

def main():
    arr_1 = getList_int(10, 0, 11)
    arr_1 = sortList_increase(arr_1)
    diff = findDiff(arr_1)

    if diff > 10:
        print(arr_1)
        return
    
    print('Difference less than 10.')

if __name__ == '__main__':
    main()