# n logn if sorted
# n if use min heap with priority queue
  #heapify is O(n)
    #pop from heap k times


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
      minHeap = []
      for x,y in points:
        dist = (x ** 2) + (y ** 2)
        minHeap.append([dist, x, y])

      heapq.heapify(minHeap) # will structure to heap]
      res = []
      while k > 0:
        dist, x, y = heapq.heappop(minHeap)
        res.append([x,y])
        k -= 1

      return res
