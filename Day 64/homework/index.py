# kodewarss

# 1)

def check_alive(health):
    if health > 0:
        return True
    else:
        return False
    

# 2)

def positive_sum(arr):
    total = 0
    for num in arr:
        if num > 0:
            total += num
    return total

# 3)

def grow(arr):
    result = 1
    for num in arr:
        result *= num
    return result

#  4)

def weather_info(temp):
    c = convert_to_celsius(temp)
    
    if c <= 0:
        return f"{c} is freezing temperature"
    else:
        return f"{c} is above freezing temperature"

def convert_to_celsius(temperature):
    celsius = (temperature - 32) * (5/9)
    return round(celsius, 1) 