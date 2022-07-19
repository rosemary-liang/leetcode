# A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

people = ['John', 'Paul', 'Sara', 'Susan']

#simple for loop
# for person in people:
#   print(f'current person: {person}')

#break
# for person in people:
#   if person == 'Sara':
#     break
#   print(f'current person: {person}')

#continue // skip Sara and continue to Susan
for person in people:
  if person == 'Sara':
    continue
  print(f'current person: {person}')

#range - STANDARD FOR LOOP
for i in range(len(people)):
  print(people[i])

for i in range(0,11):
  print(f'Number: {i}')

# While loops execute a set of statements as long as a condition is true.

count = 0
while count <=10:
  print(f'Count: {count}')
  count += 1
