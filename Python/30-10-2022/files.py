#f=variable
#open for openning file
#Book1.csv is path of file
#r is for read/w for write
#read() for reading whole file
#readline() for reading line in file
#close() for closing file
f = open("product.csv","r")

for x in f:
    
    stringArray=x.split(',')
    
    print("Price of " + stringArray[1] + " is " + stringArray[2])

