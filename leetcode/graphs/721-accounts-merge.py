#time: o(kn)worst case to traverse entire tree (traverse all emailsk and namesn) + sort logn
#thus O(nlogn)

#space: O(NK logK)

class Solution:
  def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
    graph = collections.defaultdict(set) #want unique emails
    #take email and map to name
    email_to_name = {}

    for account in accounts:
      name = account[0]

      for email in account[1:]:
        graph[email].add(account[1]) # add first email to list of emails
        graph[account[1]].add(email) #do reverse connection (first email will have all emails of graph)

        email_to_name[email] = name

    res = []
    visited = set()

    for email in graph: # visit each email node
      if email not in visited:
        #iterative, not recursive (not sure why he chose this)
        stack = [email]
        visited.add(email)

        local_res = []

        while stack:
          node = stack.pop()
          local_res.append(node)

          for edge in graph[node]:
            if edge not in visited:
              stack.append(edge)
              visited(edge)

        res.append([email_to_name[email]] + sorted(local_res))

        return res
