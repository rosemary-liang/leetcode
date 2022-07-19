# A List is a collection which is ordered and changeable. Allows duplicate members.

#Create list -- more common way used
numbers = [1,2,3,4,5]
fruits = ['Apples', 'Oranges', 'Grapes', 'Pears']

# use constructor -- don't like doing this way
numbers2 = list((1,2,3,4,5))

# both of those above will create same thing

# get a value
print(fruits[1])
print(len(fruits))


#append to list
fruits.append('Mangos')

#remove
fruits.remove('Grapes')

#insert into index
fruits.insert(2, 'Strawbs')

#change value
fruits[1] = 'Blueberries'

#reverse
fruits.reverse()


#sort list
fruits.sort()

#reverse sort
fruits.sort(reverse=True)


print(fruits)
