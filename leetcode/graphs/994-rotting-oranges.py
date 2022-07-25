# bfs and q

# set up q, time, fresh

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = collections.deque()
        time, fresh = 0, 0

       rows, cols = len(grid), len(grid[0])
       for r in range(rows):
        for c in range(cols):
          # count number of fresh
          if grid[r][c] == 1:
            fresh += 1

          # ID rotting locations
          if grid[r][c] == 2:
            q.append([r, c])

        directions = [0,1], [0,-1],[1,0],[-1,0]
        while q and fresh > 0:
          for i in range(len(q)):
            #mark as rotten
            r, c = q.popleft()
            for dr, dc in directions:
              nr, nc = dr + r, dc + c
              #if in bounds and fresh, make rotten
              if nr < 0 or nr == len(grid) or
                nc < 0 or nc == len(grid[0]) or
                grid[nr][nc] != 1:
                  continue
              #make rotten & remove 1 fresh
              grid[nr][nc] = 2
              q.append([nr, nc])
              fresh -= 1
          time += 1
        return time if fresh == 0 else -1
