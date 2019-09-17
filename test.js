// 입력 한 줄일 때
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(input){
	console.log(input);
	rl.close();
}).on("close", function(){
	process.exit();
});

// 입력 여러 줄일 때
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
	
    process.exit();
});