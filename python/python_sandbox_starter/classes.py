# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object

#create class
class User:
  #constructor (use 2 underscores init, "self" instead of "this")
  def __init__(self, name, email, age):
    self.name = name
    self.email = email
    self.age = age

  def greeting(self):
    return f'My name is {self.name} and I am {self.age}'

  def hasBirthday(self):
    self.age += 1
    return f'new age: {self.age}'

#Init user object
Jim = User('Jim Bob', 'jim@jim.com', 55)
print(Jim.hasBirthday())



#extend user class
class Customer(User):
  #constructor (copy it from parent)
  def __init__(self, name, email, age):
    self.name = name
    self.email = email
    self.age = age
    self.balance = 0

  def set_balance(self, balance):
    self.balance = balance

  def greeting(self):
    return f'My name is {self.name} and I am {self.age} and my balance is {self.balance}'

# init customer object
janet = Customer('Janet Joe', 'janet@janet.com', 25)
janet.set_balance(500)
print(janet.greeting())
