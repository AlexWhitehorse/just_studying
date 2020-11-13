def findSum(ls):
    S = 0
    for element in ls:
        S = S + element
    return S
    
ls = [2,-2,3,1,4,-8,4,-9,6,2]
S = findSum(ls)
if S >= 2:
    print(len(ls))
else:
    print('The sum less than 2.')