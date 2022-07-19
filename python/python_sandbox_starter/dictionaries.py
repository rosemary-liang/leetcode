# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
# Read more about dictionaries at https://docs.python.org/3/tutorial/datastructures.html#dictionaries

#create dict
person = {
  'first_name': 'John',
  'last_name': 'Doe',
  'age': 30 #int so no quotes needed
}

#constructor
# person2 = dict(first_name='Sara', last_name='Williams')

# access a value - bracket notation (more common)      or GET method
# print(person['first_name'])
# print(person.get('last_name'))


# add key/value
person['phone'] = '555-555-5555'
print(person)


# get dict keys
print(person.keys())

# get dict items
print(person.items())

#copy dict - similar to spread operator
person2 = person.copy()
person2['city'] = 'Boston'
print(person2)

#remove item - del or pop
del(person['age'])
person.pop('phone')


#clear - result is empty dict (empty curly braces)
person.clear()
print(person)


# get length - # of key value pairs
print(len(person2))


#list of dicts
people = [
  {'name': 'Martha', 'age': 30},
  {'name': 'Kevin', 'age': 25}
]
print(people[1]['name'])
