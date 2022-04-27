from typing import List

### Refactored ###

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        
        for ind in range(len(nums)):
          hash_map[nums[ind]] = ind
          
        for ind in range(len(nums)):
          
          if target - nums[ind] in hash_map and hash_map[target - nums[ind]] != ind:
            return [ind, hash_map[target - nums[ind]]]




### First Submission ###

# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         self.nums = nums
#         self.target = target
#         self.size = len(nums)
#         self.hash_table = self.create_buckets()
#         self.initialize_bucket()
        
#         start = self.size - 1
#         for x in range(self.size):
          
#           num1 = self.get_val(start - x)
#           for y in range(start):
#             num2 = self.get_val(y)
            
#             if num1 + num2 == target:
#               return [y, start - x]
            
        
#         return "Not found!"
        
        
#     def create_buckets(self):
#         return [[] for _ in range(self.size)]
      
#     def initialize_bucket(self):
#       count = 0
#       for val in self.nums:
#         self.set_val(count, val)
#         count += 1
    
#     def set_val(self, key, val):
      
#       hash_key = hash(key) % self.size
      
#       bucket = self.hash_table[hash_key]
      
#       found_key = False
#       for i, v in enumerate(bucket):
#         ind_key, ind_val = v
        
#         if ind_key == key:
#           found_key = True
#           break
        
#       if found_key:
#         bucket[i] = (key, val)
#       else:
#         bucket.append((key, val))
        
#     def get_val(self, key):
      
#       hash_key = hash(key) % self.size
      
#       bucket = self.hash_table[hash_key]
      
#       found_key = False
#       for i, v in enumerate(bucket):
#         ind_key, ind_val = v
        
#         if ind_key == key:
#           found_key = True
#           break
        
#       if found_key:
#         return ind_val
#       else:
#         return None
      
      
      
      
# ans = Solution()
# print(ans.twoSum([3,7,11,15], 9))
#print(ans)