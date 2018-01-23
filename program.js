var os = require('os');

var type = os.type();
var release = os.release();
if(type === 'Darwin') {
	type = 'OSX';
} else if(type === 'Windows_NT') {
	type = 'Windows';
}

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/node':
				console.log(process.versions);
				break;
			case '/system':
				console.log('System:', type);
				console.log('Release:', release);
				
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		
		}
	}
});