class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
      res =[]

      for i in range(len(intervals)):
        #first check if no overlaps
        # if newInterval goes before current interval
          # if newInterval end < current start
        if newInterval[1] < intervals[i][0]:
          res.append(newInterval) #thus can append new Interval
          return res + intervals[i:] # result + intervals at [sublist from i to end of list]

        # curr interval goes after current interval
          # if newInterval start > curr end
        elif newInterval[0] > intervals[i][1]:
          res.append(intervals[i])
        else: #overlapping, so merge
          newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]

      # must append newInterval calced in the ELSE stmt above bc it was never appended before
      res.append(newInterval)
      return res

# iterate through intervals at i
# check if not overlapping
#   check if new goes before current
#     append new
#     return remaining because all must come after
#   check if new goes after current
#     append new only, continue looping
# check if overlapping
#   set newInterval to min of starts and max of ends

# append newInterval from else
# return res


class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
      res = []

      for i in range(len(intervals)):
        # if new comes before current, append new (smaller)
        if newInterval[1] < intervals[i][0]:
          res.append(newInterval)
          return res + intervals[i:]

        # if new comes after current, append current (smaller)
        elif newInterval[0] > intervals[i][1]:
          res.append(intervals[i])
        # if overlapping
        else:
          newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]

      res.append(newInterval)
      return res
