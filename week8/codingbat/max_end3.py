def max_end3(nums):
  result = []
  if nums[0] > nums[len(nums)-1]:
    result.append(nums[0])
    result.append(nums[0])
    result.append(nums[0])
  else:
    result.append(nums[len(nums)-1])
    result.append(nums[len(nums)-1])
    result.append(nums[len(nums)-1])
  
  return result