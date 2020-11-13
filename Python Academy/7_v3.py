import random
from collections import Counter

def create_list(size, min = 0, max = 10):
    arr = []
    while len(arr) <= size:
        arr.append(random.randint(min, max))
    return arr

def count_nums(arr):
    count = Counter(arr)

    for el in count:
        if (count[el] > 1):
            print("Number [%s] repeated %s times." % (el, count[el]))

def main():
    list_= create_list(20)
    print(list_)
    count_nums(list_)

main()