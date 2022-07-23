#hashmap dfs, recursively clone neighbors
#undirected edges mean edges point back at each other
#edge OG node is null

# map old node to new node
# clone node 1 and its edges & neighbors, add to map
# clone node 2 (check if clone already exists first)
  # will check map if node 1 (and other neighbors) already in map, double direct the edge back
# go clockwise first, then counterclockwise


class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        cloneMap = {}

        def dfs(node):
          #check if node in hashmap

          # if exists, return clone
          if node in cloneMap:
            return cloneMap[node]

          # if not exists, make copy and map old node to new copy
          copy = Node(node.val)
          cloneMap[node] = copy

          #make copies of neighbors
          for nb in node.neighbors:
            # return copy created of all neighbors
            #append it to copy's neighbors
            copy.neighbors.append(dfs(nb))
          return copy

        return dfs(node) if node else none


class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
      cloneMap = {}

      def dfs(node):
        # return copy if exists
        if node in cloneMap:
          return cloneMap[node]

        # make copy if not
        else:
          copy = Node(node.val)
          cloneMap[node] = copy

        # append all neighbors
        for nb in node.neighbors:
          copy.neighbors.append(dfs(nb))
        return copy

      return dfs(node)
