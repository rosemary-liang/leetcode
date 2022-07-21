class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        m_dict = {}
        for c in magazine:
          if c not in m_dict:
            m_dict[c] = 1
          else:
            m_dict[c] += 1

        for c in ransomNote:
          if c not in m_dict or m_dict[c] == 0:
            return False
          else:
            m_dict[c] -= 1

        return True
