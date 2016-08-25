import random

remainSize = 1000
remainMoney = 10000

def getRandomMoney():
    global remainSize, remainMoney
    if remainSize == 1:
        remainSize -= 1
        return remainMoney
    money = random.randint(0, (remainMoney / remainSize * 2))
    remainSize -= 1
    remainMoney -= money
    return money

for i in range(1, remainSize + 1):
    print(getRandomMoney())
    #print("No.%d: %d" %(i, getRandomMoney()))
