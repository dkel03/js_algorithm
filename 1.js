const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(input){
	//input 처리
	const num = input.split(" ").sort(function(a, b) { return a - b });
	let sum = 0;
	
	//문제 풀이 부분
	for(var i=1; i<11; i++) sum += parseInt(num[i]);
	console.log((sum / 10).toFixed(1));
	
	rl.close();
}).on("close", function(){
	process.exit();
});