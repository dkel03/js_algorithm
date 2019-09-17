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

function main(input) {
	// input 처리
	const NM = input[0].split(' ');
	const N = parseInt(NM[0]), M = parseInt(NM[1]);
	const buttons = [], clickes = [];
	let temp = []
	for(var i=0; i<N; i++){
		buttons[i] = input[i+1]
		temp = buttons[i].split(' ');
		buttons[i] = { L: parseInt(temp[0]), R: parseInt(temp[1]), B: parseInt(temp[2]), T: parseInt(temp[3]), clicked: 0};
		temp = []
	}
	for(var i=0; i<M; i++){
		clickes[i] = input[i+1+N];
		temp = clickes[i].split(' ');
		clickes[i] = { X: parseInt(temp[0]), Y: parseInt(temp[1])};
		temp = []
	}
	
	// 문제 풀이 부분
	for(var i=M-1; i>=0; i--){
		for(var j=N-1; j>=0; j--){
			if(buttons[j].L<= clickes[i].X && buttons[j].R >= clickes[i].X){
				if(buttons[j].B<= clickes[i].Y && buttons[j].T >= clickes[i].Y){
					buttons[j].clicked++;
					break;
				}
			}
		}
	}
	
	// 출력
	for(var i=0; i<N; i++) console.log(`Button #${i+1}: ${buttons[i].clicked}`)	
}