totalclasses = 100
attendclass=int(input('Enter total number of class attended'))
percentage =(attendclass/totalclasses)*100
if (percentage <=75):
    print('Student is not allowed to sit in exam')
else:
    print('Student is allowed to sit in exam')   