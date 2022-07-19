# A Tuple is a collection which is ordered and unchangeable. Allows duplicate members.

#create tuple
fruits = ('Apples', 'Oranges', 'Grapes')  #preferred
# fruits2 = tuple(('Apples', 'Oranges', 'Grapes'))

# single value requires trailing comma
fruits2 = ('Apples',) #NEED TRAILING COMMA OR ELSE WILL TYPED TO STR INSTEAD OF TUPLE

print(fruits[1])
print(fruits2, type(fruits2))

# cant change value - will get error

# delete tuple --  it works but will get error once it is deleted (no longer defined)
# del fruits2
# print(fruits2)


# get len
print(len(fruits))

# A Set is a collection which is unordered and unindexed. No duplicate members.

# create a Set
fruits_set = {'Apples', 'Oranges', 'Mangos'}

#check if in set
print('Apples' in fruits_set) #returns bool

#add to set
fruits_set.add('Grapes')

#remove
fruits_set.remove('Grape')

#clear set
fruits_set.clear()
print(fruits_set)


#Delete  - same as never defining it
del fruits_set
