# sort by start
# sort input then interating, thus O(n log n)

class Solution:
  def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    # LAMBDA:
      # for each el i in intervals, return index 0
      # then sort all els in intervals
        #by the sorted order of the list calced by the lambda function.
    intervals.sort(key = lambda i : i[0]) # sort by start values thus 0th index
    output = [interval[0]] # start at first item isntead of empty [] to avoid edge case

    #can skip first interval (so start at 1), bc already in output array above
    # change from "for i in interval" to "for start, end in interval"
      # bc we know we will be using start/end vals instead of full interval
    for start, end in intervals[1:]:
      lastEnd = output[-1][1] # get last output el, and get END value

      # if overlapping, check end val
      #else: append interval to output
      if start <= lastEnd: # need = bc if == then is overlapping
        # if overlapping, set most recent output end to the max of lastEnd and end
        output[-1][1] = max(lastEnd, end)
      else:
        output.append([start, end])

    return output
