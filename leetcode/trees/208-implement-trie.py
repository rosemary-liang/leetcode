# O(1) prefix tree
# tries are special trees that store str
# must mark as end of word

class TrieNode:
  def __init__(self):
    self.children = {}
    self.endOfWord = False

class Trie:

    def __init__(self):
      self.root = TrieNode()

    def insert(self, word: str) -> None:
        cur = self.root

        # add nodes for each letter and mark endOfWord
        for c in word:
          # does char exist in tree?
          if c not in cur.children:
            cur.children[c] = TrieNode()
          cur = cur.children[c] # move pointer to char
        cur.endOfWord = True

    def search(self, word: str) -> bool:
      cur = self.root
      for c in word:
        if c not in cur.children: return False
        cur = cur.children[c] #move pointer
      return cur.endOfWord #if True, means it is a word

    def startsWith(self, prefix: str) -> bool:
      cur = self.root
            for c in word:
              if c not in cur.children: return False
              cur = cur.children[c] #move pointer
            return True
