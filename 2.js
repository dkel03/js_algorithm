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
	// input 처리
	const N = parseInt(input[0]);
	const userNum = input[1].split(' ').map((el) => parseInt(el)).sort(function(a, b) { return a - b });
		
	// 문제 풀이 부분
	let newNum = userNum.map((el) => { if(userNum[userNum.indexOf(el)] != userNum[userNum.indexOf(el)+1]) return el; });
	for(var i=0; i<N; i++) if(newNum[i] != undefined) console.log(newNum[i]);
	
    process.exit();
});