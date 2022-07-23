# O(n) reading through input string

# initialize stack and loop through tokens
# use 5 edge cases: 4 operators and 1 number - USE == operator
  # subtraction and divide need to be used backwards when popped
  # round down with int(b/a) for division
  # number case - append as int(c)
# return remaining item in stack[0]

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for c in tokens:
          if c == '+':
            stack.append(stack.pop() + stack.pop())
          elif c == '-':
            a, b = stack.pop(), stack.pop()
            stack.append(b - a)
          elif c == '*':
            stack.append(stack.pop() * stack.pop())
          elif c == '/':
            a, b = stack.pop(), stack.pop()
            stack.append(int(b / a))
          else:
            stack.append(int(c))

      return stack[0]

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
      stack = []

      for c in tokens:
        if c == '+':
          stack.append(stack.pop() + stack.pop())
        elif c == '-':
          a, b = stack.pop(), stack.pop()
          stack.append(b - a)
        elif c == '*':
          stack.append(stack.pop() * stack.pop())
        elif c == '/':
          a, b = stack.pop(), stack.pop()
          stack.append(int(b / a))
        else:
          stack.append(int(c))
      return stack[0]
