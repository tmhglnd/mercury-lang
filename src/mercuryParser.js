//====================================================================
// Mercury parser
//
// Parse a textfile of Mercury code and return the .json syntax tree
//====================================================================

const util = require('util');
const nearley = require('nearley');

const grammar = require('./mercuryGrammar.js');
const worker = require('./mercuryIR.js');

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

				if (results > 1){
					console.log("!!! Warning, ambiguous grammar!");
					for (var i=0; i<results; i++){
						console.log("Result", i+1, "of", results, "\n", 
						util.inspect(parser.results[i], { depth: 10 }), 
						// console.log(parser.results[i]), 
						"\n");
					}
				} else {
					// console.log("Parse succesful: \n", util.inspect(parser.results[0], { depth: 10}), "\n");
				}
				// build the tokenized syntax tree
				ast['@main'].push(parser.results[0]);
			} catch (e) {
				console.log("!!! Parse failed: \n", e.message);
				// console.log("Interpreted as comment:", { '@comment': parser.lexer.buffer });
				// console.log(parser.lexer);
				// console.log("Trying: \n", s.substring(0, parser.lexer.index-1));
				// parse(s.substring(0, parser.lexer.index-1));
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
	return result;
}
exports.mercuryParser = mercuryParser;