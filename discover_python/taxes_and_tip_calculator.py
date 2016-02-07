""" Codes by Jacob Ekanem. Script calculates the total price for a meal including tax and tips
using user inputs. Testing done using python 3 """

#print the intro as a simple string
print "Welcome to the taxes and tip calculator!"

#request for the users input in price and store the input in a variable price
price = raw_input("What is the price before tax? ")

#request for the users input in tax and store the input in a variable tax
tax = raw_input("What are the taxes? (in %) ")

#request for the users input in tip and store the input in a variable tip
tip = raw_input("What do you want to tip? (in %) ")

#get the price behind the tax
tax = (float(tax)/100) * float(price)

#get the price behind tip
tip = (float(tip)/100) * float(price)

#get the final price, re-saving the value in the variable price
price = float(price) + tax + tip

#print the result using
print "The price you need to pay is: $%s." % (price)