##შექმენით პროგრამა, რომელიც მომხმარებლისგან შემოიტანს სახელს, გვარს, ასაკს, 
# საცხოვრებელ ადგილს, დედის სახელს, დედის გვარს, დედის ასაკს და ა.შ შემდეგ
#  კი შემოტანილი მნიშვნელობებით ააგეთ წინადადება.

first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
age = input("Enter age: ")
city = input("Enter your city : ")
mother_first_name = input("Enter your mother's first name: ")
mother_last_name = input("Enter your mother's last name: ")
mother_age = input("Enter your mother's age: ")

sentence = first_name + " " + last_name + ", " + age + " years old, lives in " + city + ". Her mother's name is " + mother_first_name + " " + mother_last_name + ", and she is " + mother_age + " years old."

print(sentence)

# 3. Task: Calculate the remaining apples
#You have a basket of apples and you give some to your friend. The program takes two
#numbers as input, the total number of apples and the number of apples you give away, 
#and assigns them to corresponding total_apples and given_apples variables.

total_apples = int(input("Enter the total number of apples: "))
given_apples = int(input("Enter the number of apples you give away: "))

apples = total_apples - given_apples
print(apples)

# 4. Task: deposit in bank
#You want to save some money. The program takes two numbers
#as input, your initial savings and the amount you plan to add, and assigns
#  them to corresponding savings and deposit variables.

savings = float(input("Enter your initial savings: "))
deposit = float(input("Enter the amount you plan to deposit: "))

total = savings + deposit
print("Total savings:", total)


# 5. Task: collection of coins
#You have a collection of coins. The program takes two numbers as input, 
#the total number of coins you have and the number of coins you spent,
#and assigns them to corresponding total_coins and spent_coins variables.

total_coins = int(input("Enter the total number of coins you have: "))
spent_coins = int(input("Enter the number of coins you spent: "))

coins = total_coins - spent_coins
print("Remaining coins:", coins)