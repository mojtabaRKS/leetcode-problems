class Solution:
    def isPalindrome(self, x: int) -> bool:

        if (x < 0):
            return False

        converted_num = str(x)

        if (converted_num == converted_num[::-1]):
            return True
