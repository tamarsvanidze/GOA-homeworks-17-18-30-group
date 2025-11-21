#You want to withdraw some money from your bank account.
#  The program takes two numbers as input, your account balance and the amount
#  you want to withdraw, and assigns them to corresponding "balance" and "withdraw" variables. 
# Task Calculate and output the remaining balance after the withdrawal.
#  Sample Input 450000 9000 
# Sample Output 441000

balance = int(input("შეიყვანე ანგარიში: "))
withdraw = int(input("შეიყვანე გადახდის თანხა: "))
new_balance = balance - withdraw
print(new_balance)

## 2. შექმენით პროგრამა, რომელიც მომხმარებლისგან შემოიტანს სახელს,
#  გვარს, ასაკს და საცხოვრებელ ადგილს. შემდეგ 
# კი შემოტანილი მნიშვნელობებით ააგეთ წინადადება.


name = input("Enter first name: ")
surname = input("Enter last name: ")
age = input("Enter age: ")
city = input("Enter city : ")

sentence = name + " " + surname + " is " + age + " years old and lives in " + city + "."
print(sentence)
