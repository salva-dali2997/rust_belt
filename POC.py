# def main():
#     day = user_input()
#     print(day)

# def user_input():
#     return input("Pick a day 0 is Monday 6 is Sunday")

day = input("Pick a day 0 is Monday 6 is Sunday: ")
day = int(day)
if(day < 0 | day > 6):
    print("Please enter a valid number")
else:
    print("your number is: " + str(day))