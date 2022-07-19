# A variable is a container for a value, which can be of various types

'''
This is a
multiline comment
or docstring (used to define a functions purpose)
can be single or double quotes
'''

"""
VARIABLE RULES:
  - Variable names are case sensitive (name and NAME are different variables)
  - Must start with a letter or an underscore
  - Can have numbers but can not start with one
"""

x = 1         # int by default
y = 2.5       # float by default
name = 'John' # str
is_cool = True # bool [NEEDS CAPITAL FIRST LETTER; true is a variable while True is bool]


# multiple assignment
x, y, name, is_cool = (1, 2.5, 'John', True) # does the same as above section
a = x + y

#casting (change type)
x = str(x)
y = int(y)
z = float(y)

print(x, y, name, is_cool, a)
print(type(z), z)
