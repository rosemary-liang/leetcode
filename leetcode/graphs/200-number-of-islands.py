#bfs iterative


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
      #edge - mpty grid
      if not grid: return 0

      #get dimensions
      rows, cols = len(grid), len(grid[0])
      visit = set()
      islands = 0

      def bfs(r,c):
        q = collections.deque()
        # add as tuple
        visit.add((r,c))
        q.append((r,c))

        while q:
          row, col = q.popleft()
          directions = [[1,0], [-1,0], [0,1], [0,-1]]
          for dr, dc in directions:
            r, c = row + dr, col + dc
            #check in bounds, if 1, and if visited
            if ((r) in range(rows) and
                (c) in range(cols) and
                grid[r][c] == '1' and
                (r, c) not in visit):
                  q.append((r, c))
                  visit.add((r,c))


      for r in range(rows):
        for c in range(cols):
          if grid[r][c] == '1' and (r,c) not in visit:
            bfs(r,c)
            islands += 1
      return islands
