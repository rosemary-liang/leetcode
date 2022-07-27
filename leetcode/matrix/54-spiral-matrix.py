# new submatrix after outer ring is traversed
  # move L and R boundaries
  # move T and B boundaries
# 4 pointers
  #start at top left position
    # add it to output
  # after traverse to very right, move Top pointer down
  # after traverse to very bottom, move Right pointer left
  # after traverse to very left, move Bottom pointer up
  # after traverse to very top, move Left pointer right

# T: O(m * n) (dimensions of matrix)
#S: O(1) bc not saving memory, just running code if you dont count output as extra memory

# for i in range(first, second) <-- second is noninclusive so must go out of bounds
# right and bottom have to -1 by default
# 2nd arg of loop must be noninclusive


class Solution:
  def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
    res = []
    left, right = 0, len(matrix[0]) # cols, set right out of bounds because right value is non inclusive
    top, bottom = 0, len(matrix) # rows

    while left < right and top < bottom:
      #left to right & get every val in top row
      # for i in range(x,y) <-- y is noninclusive so must go out of bounds
      for i in range(left, right):
        res.append(matrix[top][i])
      top += 1

      for i in range(top, bottom):
        res.append(matrix[i][right - 1]) # we know right is out of bounds
      right -= 1

      if not left < right and top < bottom:
        break

      # for i in range(x,y) <-- y is noninclusive so must go out of bounds
      # going backwards so -1 as 3rd arg
      for i in range(right - 1, left - 1, -1):
        res.append(matrix[bottom - 1][i])
      bottom -= 1

      for i in range(bottom -1, top - 1, -1):
        res.append(matrix[i][left])
      left += 1

    return res
