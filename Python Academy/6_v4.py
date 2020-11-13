def sum_odd_digts(number):
    str_nums = map(int, str(number))
    sum_odd = 0

    for el in str_nums:
        num = int(el)

        if (num % 2) == 0:
            sum_odd += (num * num)

    return sum_odd


def main():
    try:
        user_input = int(input("Enter a number: "))
    except ValueError:
        print("Invalid number! \nTry again")
        main()

    result = sum_odd_digts(user_input)
    print(result)


if __name__ == '__main__':
    main()