""" T.T.T.38: The sum of each digits: """


def sum_of_digits(a, b):
    str_numbers = ''
    num = 0
    for i in range(a,b+1):
        str_numbers = str(i)
    for number in str_numbers:
    	num += int(number)
    return num



# [[6, 18], 75]

sum_of_digits(6, 18)




""" T.T.T.38: The sum of each digits: """

def sum_of_digits(a, b):
	num = 0
	for i in range(a,b+1):
		for number in str(i):
			num += int(number)
	print(num)    	
	return num

sum_of_digits(1, 10000000)

# [[6, 18], 75]

sum_of_digits(6, 18)
sum_of_digits(1, 10000000)