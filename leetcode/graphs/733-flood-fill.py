# edge - check if list is None
# edge - check if image matches initial color

# recursive DFS
# if edge cases where list is None or image already matches newColor, return image
# self.fill(img, sr,sc,img at coordinate, newColor)
# return img

# def fill(same params above)
#     if statement check if out of bounds for c and r, check if current image != initialColor
#         return
#     otherwise
#     set image to newColor and fill in all 4 directions by +- r and c


class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        #edge
        if image == None or image[sr][sc] == newColor:
            return image

        self.fill(image, sr, sc, image[sr][sc], newColor)
        return image

    def fill(self, image, r, c, initialColor, newColor):
        #base - check if out of bound
        #last or stmt checks if img matches initial color
        if r<0 or r >=len(image) or c<0 or c>=len(image[0]) or image[r][c] != initialColor:
            return
        image[r][c] = newColor
        self.fill(image, r+1, c, initialColor, newColor) # down
        self.fill(image, r-1, c, initialColor, newColor) #up
        self.fill(image, r, c+1, initialColor, newColor) # right
        self.fill(image, r, c-1, initialColor, newColor) #left


#practice
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:

        #edge: check if List is None or img[sr][sc] already newColor
        if image == None or image[sr][sc] == newColor:
            return image
        # fill and return image
        self.fill(image, sr, sc, image[sr][sc], newColor)

    def fill(self, image, r, c, initialColor, newColor):
        # check r and c bounds
        # check if image is not equal to newColor
        if r > 0 or r <= len(image) or c > 0 or c <= len(image[0]) or image[r][c] != initialColor
            return
        self.fill(image, r+1, c, initialColor, newColor)
        self.fill(image, r-1, c, initialColor, newColor)
        self.fill(image, r, c+1, initialColor, newColor)
        self.fill(image, r, c-1, initialColor, newColor)
