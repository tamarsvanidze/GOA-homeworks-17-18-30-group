# codewars
#1 about frogs
def mouth_size(animal):
     if animal.lower() == "alligator":
        return "small"
     else:
        return "wide"
     

#2 about hours
def past(h, m, s):
    return (h * 3600 + m * 60 + s) * 1000

#3 about: !!!
def replace_exclamation(st):
    vowel = "aeiouAEIOU"
    result = ""
    for i in st:
        if i in vowel:
            result += "!"
        else:
            result += i
    return result  

#4
def set_alarm(employed, vacation):
     if employed == True and vacation == False:
        return True
     else:
        return False