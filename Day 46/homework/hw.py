# codewars

#1.
def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"


#2
def whatday(num):
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if 1 <= num <= 7:
        return days[num - 1]
    else:
        return "Wrong, please enter a number between 1 and 7"

#3    
def high_and_low(numbers):
    nums = numbers.split()         
    nums = [int(n) for n in nums]   
    return str(max(nums)) + " " + str(min(nums))

#4
def sum_mix(arr):
    total = 0
    for x in arr:
        total += int(x) 
    return total
