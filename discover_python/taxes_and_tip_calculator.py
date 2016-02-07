""" Codes by Jacob Ekanem. Script calculates the total price for a meal including tax and tips
using user inputs. Testing done using python 3 """

#print the intro as a simple string
print "Welcome to the taxes and tip calculator!"

#request for the users input in price and store the input in a variable price
price = float(raw_input("What is the price before tax? "))

#request for the users input in tax and store the input in a variable tax
tax = float(raw_input("What are the taxes? (in %) "))

#request for the users input in tip and store the input in a variable tip
tip = float(raw_input("What do you want to tip? (in %) "))

#get the price behind the tax
price = price + ((tax / 100) * price)

#get the price behind tip
price = price + ((tip / 100) * price)

#print the result using
print "The price you need to pay is: $%.6f." % (price)