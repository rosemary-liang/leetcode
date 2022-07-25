# how to eliminate dupe solutions?
# (O(nlogn))

class Solution:
  def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
  res = []

  #cur to track current combo, total to track cur sum
  def dfs(i, cur, total):
    #base case find combo
    if total == target:
      res.append(cur.copy()) # want to keep cur in recursion, so keep the copy
      return

    #base case cannot find combo
    #out of bounds, return immediately
    if i >= len(candidates) or total > target:
      return

    # append candidate to curr combo
    cur.append(candidates[i]) # this changes the total (3rd arg next line)
    dfs(i, cur, total + candidates[i])
    # once you run dfs, pop the last item from cur cause you can't use it anymore
    cur.pop()
    dfs(i + 1, cur, total) #total stays same cause cur is same from initial dfs call above

  dfs(0, [], 0)
  return result
