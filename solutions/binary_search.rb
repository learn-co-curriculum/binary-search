def binary_search(arr, target)
  return false if arr.empty?

  middle = arr.length / 2
  middle_value = arr[middle]

  return true if middle_value == target

  search_side = middle_value > target ? arr[0...middle] : arr[middle + 1..-1]

  return binary_search(search_side, target)
end

# BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
def binary_search_index(arr, target)
  return -1 if arr.empty?

  middle = arr.length / 2
  middle_value = arr[middle]

  return middle if middle_value == target

  if middle_value > target
    return binary_search_index(arr[0...middle], target)
  else
    idx = binary_search_index(arr[middle + 1..-1], target)

    return -1 if idx == -1

    return idx + middle + 1
  end 
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", binary_search([1, 2, 3], 3)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([3, 5, 9], 10)

  puts

  puts "Expecting: true"
  puts "=>", binary_search([3, 5, 9, 20], 3)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([3, 5, 9, 20], -10)

  puts

  puts "Expecting: true"
  puts "=>", binary_search([3, 5, 9, 20], 9)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([], 9)

  # Don't forget to add your own!

  # UNCOMMENT FOR BONUS
  puts 

  puts "Expecting: 0"
  puts "=>", binary_search_index([1, 2, 3], 1)

  puts

  puts "Expecting: -1"
  puts "=>", binary_search_index([4, 7, 20], 100)

  puts

  puts "Expecting: 6"
  puts "=>", binary_search_index([1, 2, 3, 4, 5, 6, 7, 8], 7)

  puts

  puts "Expecting: 4"
  puts "=>", binary_search_index([4, 7, 20, 30, 40], 40)

  puts

  puts "Expecting: 2"
  puts "=>", binary_search_index([1, 2, 3, 4, 5, 6, 7, 8], 3)
end

# Add a written explanation of your solution
