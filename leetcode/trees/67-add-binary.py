# O(n) - linear time

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res = ''
        carry = 0

        a, b = a[::-1], b[::-1] #reverse the strings (may not be same length)

        # iterate through longer string to ensure we capture every digit; if one is longer then we might be out of bounds of the shorter string
        for i in range(max(len(a), len(b))):
          # if index is valid assign digitA to a[i] else to 0
          #ord(a[i]) - ord('0') <---- this converts char to integer
          digitA = ord(a[i]) - ord('0') if i < len(a) else 0
          digitB = ord(b[i]) - ord('0') if i < len(b) else 0

          total = digitA + digitB + carry
          # binary base 2, so mod by 2
            # this allows us to assign 1 or 0 to char
            # change int to str
          char = str(total % 2)
          # take char & add to beginning of res str (concatenate)
          res = char + res
          # floor division
            # if total is 1, carry = 0
            # if total is 2 OR 3, carry = 1
          carry = total // 2

        # if carry != 0, concat 1 to beginning of res string
        if carry:
          res = '1' + res

        return res
