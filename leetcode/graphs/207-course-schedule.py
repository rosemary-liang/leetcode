# cannot have a cycle (double edge)
# dfs

# O(n courses + p preqs) -> O(n)
#DFS and hashmap of course & prereqs
# loop through preqs from position 0 to n-1
  #check hashmap for any prereqs and recurse until prereqs are empty
  # empty the hashmap for course if prev preq can be completed (empty)
  # if all empty return true
# detect loop using a set of visited courses

# DETAILED STEPS
# setup hashmap, map each i to empty array for each i of range(numCourses)
# populate hashmap by looping throug preqs -- for course, preq in prequisites, append with crs as key

# setup visit Set
# def dfs(crs)
  #2 base cases:
    # if crs already visited return False
    # if preMap[crs] is empty return True
  # add to visitSet and run dfs on preqs
  # loop through preqs of map[crs]
    # if any course cannot be completed return False (cycle)

  #remove from visitSet
  #set map[crs] =[]
  # return True

# edge: in case floating graph not connected // loop through crs
#   loop through map[crs], call dfs[crs], return False if returned False
# exit loop return true

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
      # for each course, map it to an empty list
      preMap = { i:[] for i in range(numCourses)}
      for crs, pre in prerequisites:
        #map prereqs
        preMap[crs].append(pre)

      #visit map - store all courses along current DFS path
      visitSet = set()
      def dfs(crs):
        #base case - if course already in set
        if crs in visitSet:
          return False

        #base case 2 - if prereqs empty, therefore no preqs & can be completed
        if preMap[crs] == []:
          return True

        # if neither above 2 bases cases true, can add crs to visitSet and recursively run dfs on each of the course's preqs
        visitSet.add(crs)
        for pre in preMap[crs]:
          # if 1 course can't be completed above, return false
          if not dfs(pre): return False
        visitSet.remove(crs) #because finished visiting course
        preMap[crs] = [] #set to empty list to return True immediately above
        return True

      for crs in range(numCourses): #loop needed in case graph is not fully connected (floating courses/graph)
        if not dfs(crs):
           return False
      return True


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
      visitSet = set()
      preqMap = { i:[] for i in range(numCourses)}
      for crs, preq in prequisites:
        #THIS LINE tricky bc appending new prereqs, not replacing the value
        preqMap[crs].append = preq

      def dfs(crs):
        # 2 baase case, already visited = cycle; if preqs empty
        if crs in visitSet: return False

        if preqMap[crs] == []: return True

        visitSet.append(crs)
        for preq in preMap[crs]: #tricky: loop through entire preq array at crs
          if not dfs(preq): return False
        preqMap[crs] = []
        visitSet.remove(crs)
        return True

       #edge: disconnected graph; loop through crs in range
      for crs in range(numCourses)
        if not dfs(crs): return False

      return True
