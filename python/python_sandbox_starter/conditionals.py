# If/ Else conditions are used to decide to do something based on something being true or false

x = 3
y = 50

# Comparison Operators (==, !=, >, <, >=, <=) - Used to compare values

#simple if stmt
# if  x > y:
  # print(f'{x} is greater than {y}')

# if else
if  x > y:
  print(f'{x} is greater than {y}')
else:
  print(f'{x} is less than {y}')

#elif
if  x > y:
  print(f'{x} is greater than {y}')
elif x == y:
  print(f'{x} is equal {y}')
else:
  print(f'{x} is less than {y}')

#Nested if (NOT IDEAL - USE LOGICAL OPERATOR [and] instead)
# if x > 2:
#   if x <= 10:
#     print(f'{x} is greater than 2 and less than or equal to 10')

# Logical operators (and aka && , or aka ||, not aka !) - Used to combine conditional statements

if x > 2 and x <= 10:
   print(f'{x} is greater than 2 and less than or equal to 10')



# Membership Operators (in, not in) - Membership operators are used to test if a sequence is presented in an object

numbers = [1,2,4,5]

if x in numbers:
  print(x in numbers) #returns Bool


if x not in numbers:
  print(x not in numbers)


# Identity Operators (is, is not) - Compare the objects, not if they are equal, but if they are actually the same object, with the same memory location:

# is
if x is y:
  print(x is y)
