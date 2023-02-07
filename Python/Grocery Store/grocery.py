print("Hi , Welcome Grocery Market.")
customerName = input("Enter your name ")
customerPhoneNum = input("Enter phone number")

product = open("ProductList.csv" ,"r")
print("List of Products Available .. ")
product.readline()
for x in product :
    split1 = x.split(",")
    print("Product ID:",split1[0]," Product Name:" , split1[1]," Product Price:",split1[2])

product.close()
ProductID = input("Please select the product ID :")

prodPrice = 0
product = open("ProductList.csv" ,"r")
product.readline()
for y in product :
    split2 = y.split(",")
    if(split2[0] == ProductID):
        prodPrice = int(split2[2])

Quantity = input("Please enter the quantity :" )

total = str(int(Quantity) * int(prodPrice))

customerDetails = open("CustomerInfo.csv","a")
customerDetails.write('\n')
customerDetails.write(customerName)
customerDetails.write(",")
customerDetails.write(customerPhoneNum)
customerDetails.write(",")
customerDetails.write(ProductID)
customerDetails.write(",")
customerDetails.write(Quantity)
customerDetails.write(",")
customerDetails.write(str(prodPrice))
customerDetails.write(",")
customerDetails.write(total)


addProduct = input("Do you want to add another Item? Yes/No")

addProduct = str("")

if addProduct == "No":
   print("Thanks")
else:
 addproductID = input("Enter product ID to add item")
 product = open("ProductList.csv" ,"r")
product.readline()
for y in product :
    split3 = y.split(",")
    if(split3[0] == ProductID):
        prodPrice = int(split3[2])

Quantity = input("Please enter the quantity :" )
 
   

total = str(int(Quantity) * int(prodPrice))



