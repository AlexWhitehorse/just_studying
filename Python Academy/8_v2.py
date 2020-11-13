import random

def make_matrix(height, width):
    min_int = -100
    max_int = 100
    i = 0
    matrix = []

    while (i < height):     
        j = 0
        row = []

        while (j < width):
            row.append(rand_int(min_int, max_int))
            j = j+1
            
        matrix.append(row)
        i = i+1

    return matrix

def rand_int(min, max):
    return random.randint(min, max)

def user_input():
    try:
        col = int(input("Input the number of columns: "))
        row = int(input("Input the number of rows: "))
        return col, row
    except ValueError:
        print("Invalid value!")
        print("Try again.")
        return user_input()

columns, rows = user_input()
print(make_matrix(columns, rows))