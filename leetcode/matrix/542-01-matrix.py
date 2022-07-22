# bfs
#initialize h and w and q
# ID 0 and nonzeros
  # add all 0's (x,y) to queue
  # mark all nonzeroes with #
# explore each coord of q in all 4 directions (explore all 0's first)
  # if hash, and nc,nr in bounds, then assign mat[nc][nr] = mat[r][c] + 1
    # add 1 because it assumes that start from 0, and keep adding 1 each time you find another nonzero in a row
  #append (nc, nr) to q (to continue exploring)
#return mat after all explored and all hashes changed to distance from nearest 0


#DETAILS
# nested loop through r in range h, then c in range w
  # if mat at loc is 0, append to q
  # else change val to #

# nested loop through r and c in q, then dx, dy in (coords) x4
  # set nr and nc (r+dx) (c+dy)
  # check if mat[nr][nc] is in bounds of h and w, and if val is '#'
    # assign mat at nr/nc = mat[r][c] +1 (start at 0, keep adding until next coord is not longer '#')
    # append mat at nr/nc to q to continue exploring those

class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        h = len(mat)
        w = len(mat[0])
        q = []

        # put all 0's in q
        # mark all nonzero's with #
        for r in range(h):
          for c in range(w):
            if mat[r][c] == 0:
              q.append((r, c))
            else:
              mat[r][c] = '#'

        for r, c in q:
          for dx, dy in (1,0), (-1,0), (0,1), (0,-1):
            nr = r + dx
            nc = c + dy

            #handle nonzeros
            if 0 <= nr < h and 0 <= nc < w and mat[nr][nc] == '#':
              mat[nr][nc] = mat[r][c] + 1
              q.append((nr, nc))

        return mat


class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
      h = len(mat)
      w = len(mat[0])
      q = []

      # check if 0 or not
      for r in range(h):
        for c in range(w):
          if mat[r][c] == 0:
            q.append((r,c))
          else:
            mat[r][c] = '#'

      for r,c in q:
        for dx, dy in (0,1), (0,-1),(1,0), (-1,0):
          #set new nc nr, check if in bounds and if val is hash
          nr = r + dy
          nc = c + dx

          if 0 <= nr < h and 0 <= nc < w and mat[nc][nr] == '#':
            mat[nr][nc] = mat[r][c] + 1
            q.append((nc, nr))

      return mat
