# Ologn for the get method

class TimeMap:

  def __init__(self):
    self.store = {} # key=str, val=[list of list[val, time]]


  def set(self, key: str, value: str, timestamp: int) -> None:
    # if key not in there, put in empty list, then append at key
    if key not in self.store:
      self.store[key] = []
    self.store[key].append([value, timestamp])

  def get(self, key: str, timestamp: int) -> str:
    #tricky
    res = '' # if key doesn't exist, return empty str
    values = self.store.get(key, []) # return list or empty list(if key doesnt exist)

    #binary search
    l, r = 0, len(values) - 1
    while l <= r:
      m = (l + r) // 2
      #check timestamp, 2nd value
      if values[m][1] <= timestamp:
        res = values[m][0] #set result bc is closest to timestamp so far
        l = m + 1 # search the right portion
      else:
        #only update right pointer, do not set res
        r = m -1

    return res
