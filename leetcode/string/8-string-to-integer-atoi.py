# strip leading spaces
# check pos/neg
# parse digits
# check in bounds

# T: O(n) for leading spaces, O(n) for parsing through string
# S: O(1)

class Solution:
  def myAtoi(self, s: str) -> int:
    #remove leading space, takes O(n) if entire string is leading spaces
    s = s.lstrip()

    #edge: if s only had leading spaces, now is empty string
    if not s: return 0

    #start processing string, index by index and accumulating while valid
    i = 0
    # neg sign can only show up at str start
    sign = 1
    if s[i] == "+":
      i += 1
    elif s[i] == "-":
      i += 1
      sign *= -1

    parsed = 0

    parse left to right
    while i < len(s):
      cur = s[i]

      if not cur.digit():
        break
      else:
        parsed = parsed * 10 + int(cur)

      i += 1

    parsed *= sign

    #clamping
    if parsed > 2 ** 31 - 1:
      return 2 ** 31 -1å
    elif parsed < -2 ** 31 -1:
      return -2 ** 31 -1
    else:
      return parsed
