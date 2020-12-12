""" 6-Kyu_Does my number look big in this? """


def narcissistic( value ):
	num = 0
	for number in str(value):
		num += int(number) ** len(str(value))

	if num == value:
		return True
	else:
		return False










#narcissistic(7)#, True, '7 is narcissistic'
narcissistic(371)#, True, '371 is narcissistic'
#narcissistic(122)#, False, '122 is not narcissistic'
#narcissistic(4887)#, False, '4887 is not narcissistic'