# time O(n) - go through each input char once
# memory O(n) - using stack which is up to size of input

# initialize empty stack
# initialize map, key is closing bracket, val is open bracket
# for char in s
#   check if c is in map
#     true - check if stack as length and if last item matches map[c] (is a closing bracket)
#       true - pop last item
#       false - return False
#   false - append to stack
# return True if stack empty, else False

class Solution:
  def isValid(self, s: str) -> bool:
    stack = []
      map = {
        '}': '{',
        ')': '(',
        ']': '['
      }

      for c in s:
        if c in map:
          if stack and stack[-1] == map[c]:
            stack.pop()
          else:
            return False
        else:
          stack.append(c)

      return True if not stack else False


class Solution:
    def isValid(self, s: str) -> bool:
      stack = []
      map = {
        '}': '{',
        ')': '(',
        ']': '['
      }

      for c in s:
        if c in map:
          # stack[-1] in python refers to most recently added stack item
          if stack and stack[-1] == map[c]:
            stack.pop()
          else:
            return False
        else:
          stack.append(c)

      # return True if stack is empty, or else false
      return True if not stack else False

class Solution:
  def isValid(self, s: str) -> bool:
    stack = []
    map = {
      ']': '[',
      '}': '{',
      ')': '('
    }

    for c in s:
      if c in map:
        if stack and stack[-1] = map[c]:
          stack.pop()
        else:
          return False
      else:
        stack.append(c)
    return True if not stack else False
