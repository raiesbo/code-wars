// 6 kyu // Unique in order

// URL: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = i => {
  const arr = Array.isArray(i) ? i : i.split('');
  return arr.filter((item, id) => arr[id + 1] !== item)
}




uniqueInOrder('AAAABBBCCDAABBB') // ['A','B','C','D','A','B']
  
  uniqueInOrder(['A','A','A','A','B','B','B','C','C','D','A','A','B','B','B']) // ['A','B','C','D','A','B']