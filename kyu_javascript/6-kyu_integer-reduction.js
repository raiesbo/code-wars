//Kyu6_Integer reduction:

function solve(n, k) {
	let arr = [];
	let numbers = '' + n;
	for (let number of numbers) {
		arr.push(Number(number));
	};
	for (let i = 0; i < k; i++) {
		arr.pop(Math.max(...arr));
	};
	console.log(arr);
};


solve(123056,3)





Test.assertEquals(solve(123056,3),'12056');

let arr2 = [1, 2, 3, 0, 5, 6];
let deletedArr = [];
deletedArr.push(Math.max(...arr2));

const array1 = [1, 3, 2];

console.log(Math.max(...array1));