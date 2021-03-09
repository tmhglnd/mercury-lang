
const path = require('path');
const fs = require('fs-extra');
const util = require('util');

let entryPoint = "../index.js";
// entryPoint = "../build/mercury.es5.min.js";

const Mercury = require(entryPoint).mercuryParser;

function parseFile(f){
	let file = fs.readFileSync(f, 'utf-8');
	let name = path.parse(f).name;
	console.log(`\nParsing: ${name}\n`);

	// start time of parsing
	let time = Date.now();	
	// store syntax tree result in variable
	let result = Mercury(file);
	// end time of parsing
	time = Date.now() - time;
	console.log(`\nParsed code succesful within: ${time} ms\n`);
	
	console.log(util.inspect(result, { showHidden: false, depth: null, colors: true }));

	// write to disk for check
	fs.outputJSONSync(`./test/tree/${name}.json`, result, { spaces: 2 });
}

parseFile('./test/test-grammar.txt');
// parseFile('./test/test-rings.txt');
// parseFile('./test/test-synth.txt');
