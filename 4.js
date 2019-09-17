const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
	main(input)
    process.exit();
});

function main(input){
	// input 처리
	const NQ = input[0].split(" ");
	const N = parseInt(NQ[0]), Q = parseInt(NQ[1]), books = input[1], pos = []
	let temp = [], subStr = '', alphabet = alphabetInit();
	for(var i=0; i<Q; i++){
		pos[i] = input[2+i];
		temp = pos[i].split(" ")
		pos[i] = { L: parseInt(temp[0]), R: parseInt(temp[1])}
	}
	
	// 문제 풀이 부분
	for(var i=0; i<Q; i++){
		subStr = books.substring(pos[i].L-1, pos[i].R);
		for(var j=0; j<subStr.length; j++){
			var index = parseInt(subStr.charCodeAt(j)-'A'.charCodeAt(0));
			alphabet[index]++;
		}
		var answer = String.fromCharCode(findMaxIndex(alphabet)+'A'.charCodeAt(0));
		
		// 출력
		console.log(answer);
		alphabet = alphabetInit();
	}
}

// 추가 프로시저
function alphabetInit(){
  var alphabet = [];
	for(var i=0; i<26; i++)
		alphabet[i] = 0;
	return alphabet;
}

function findMaxIndex(arr) {
	let max = 0, maxIndex=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
			maxIndex = i;
		}
	}
	return maxIndex;
}




// 30 5
// AAAAABBBBBBCDDEFIJLMPQRSTUVWYZ
// 11 12
// 7 24
// 12 23
// 13 29
// 1 19

