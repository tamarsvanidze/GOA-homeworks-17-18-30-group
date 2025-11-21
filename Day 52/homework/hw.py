#codewars
#The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would
#  like your help with an application form that will tell prospective members which category they
#  will be placed. To be a senior, a member must be at least 55 years old and have a handicap
#  greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player
#  the lower the handicap. Input Input will consist of a list of pairs. Each pair contains information for
#  a single potential member. Information consists of an integer for the person's age and an integer for the
#  person's handicap. Output Output will consist of a list of string values (in Haskell and C: Open or Senior) 
# stating whether the respective member is to be placed in the senior or open category.

def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result

#2You might know some pretty large perfect squares. But what about the NEXT one?
#Complete the findNextSquare method that finds the next integral perfect square 
# after the one passed as a parameter. Recall that an integral perfect square is an integer
#  n such that sqrt(n) is also an integer.If the argument is itself not a perfect square then return
#  either -1 or an empty value like None or null, depending on your language. You may assume the argument
#  is non-negative.
#Examples ( Input --> Output )121 --> 144 625 --> 676 114 --> -1  #  because 114 is not a perfect square  
def find_next_square(sq):
    root = int(sq ** 0.5)  
    if root * root != sq:  
        return -1
    return (root + 1) ** 2  

#3 Sum of odd numbers
def row_sum_odd_numbers(n):
    return n ** 3

#4 In a small town the population is p0 = 1000 at the beginning of a year. 
# The population regularly increases by 2 percent per year and moreover 50 new 
# inhabitants per year come to live in the town. How many years does the town
#  need to see its population greater than or equal to p = 1200 inhabitants?
def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 += int(p0 * percent / 100) + aug
        years += 1
    return years

#5.In a factory a printer prints labels for boxes. For one kind of boxes the
#  printer has to use colors which, for the sake of simplicity, are named with
#  letters from a to m. The colors used by the printer are recorded in a control string.
#  For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three 
# times color a, four times color b, one time color h then one time color a... Sometimes there are problems: lack
#  of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from 
# a to m. You have to write a function printer_error which given a string will return the error rate of the printer as a string
#  representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this
#  fraction to a simpler expression.
def printer_error(s):
    result = ""
    error = 0
    for c in s:
        if c < 'a' or c > 'm': 
            error += 1
    result = str(error) + "/" + str(len(s))
    return result