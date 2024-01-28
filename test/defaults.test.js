// 
// Extensive grammar testing file
//

const Mercury = require('../index.js');

test('Default Arguments', () => {
	Mercury('new synth saw shape()');
	Mercury('new synth saw shape(?)');
	Mercury('new synth saw shape(? #)');
	Mercury('new synth saw shape(# ? ?)');
});
