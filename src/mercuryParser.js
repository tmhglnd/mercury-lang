//====================================================================
// Mercury parser
//
// Parse a textfile of Mercury code and return the .json syntax tree
//====================================================================

const nearley = require('nearley');
// const util = require('util');

const grammar = require('./mercuryGrammar.js');
const worker = require('./mercuryIR.js');

const DEBUG = false;

function mercuryParser(code){
	// split multiple lines into array of strings
	let lines = code.split('\n');
	let ast = { '@main' : [] };
	let result = {};

	for (let l in lines){
		let parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
		// create a Parser object from our grammar
		if (lines[l] !== ''){
			try {
				// parse something!
				parser.feed(lines[l]);

				// parser.results is an array of possible parsings.
				let results = parser.results.length;

				if (DEBUG){
					if (results > 1){
						console.log("Warning, ambiguous grammar!");
						for (var i=0; i<results; i++){
							// console.log("Result", i+1, "of", results, "\n", util.inspect(parser.results[i], { depth: 10 }), "\n");
							// console.log(parser.results[i]);
						}
					}
				}
				// build the tokenized syntax tree
				ast['@main'].push(parser.results[0]);
			} catch (e) {
				// console.error(e);
				console.error(`Syntax error at line ${Number(l)+1} col ${e.token.col}: Unexpected ${e.token.type}: ${e.token.value} at ${lines[l].slice(0, e.token.offset)}${e.token.text}<-`);
			}
		}
	}
	// return ast;
	// write AST as json to disk
	// fs not working for browser compiled code
	// fs.writeJSONSync('./test/tree/mercuryAST.json', ast, { spaces: 2 });
	// console.log('Parse succesful!');

	// traverse Syntax Tree and create Intermediate Representation
	result = worker.traverseTreeIR(ast['@main']);

	// write IR as json to disk
	// fs.writeJSONSync('./test/mercuryIR.json', result, { spaces: 4 });
	return { '@ast': ast, '@parse': result };
}
exports.mercuryParser = mercuryParser;