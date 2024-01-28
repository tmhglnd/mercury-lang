// 
// Extensive grammar testing file
//

const Mercury = require('../index.js');

test('Default Arguments', () => {
	// Mercury('new synth saw time(?) play(?) ratchet(?) warp(?) human(?)');
	// Mercury('new synth saw shape(?) amp(? ?) pan(?) fx(?)');
	
	Mercury('new synth saw note(? ?) super(? ?) slide(?) noise(? ? ?) sub(?)');
	Mercury('new sample kick_909 speed(?) note(? ?) tune(?) start(?) stretch(?)');
	Mercury('new polySynth sine note(# ?) steal(?) voices(?)');
	Mercury('new midi default length(?) chord(#) sync(#) cc(?)');
	Mercury('new modulator sine name(?) range(# # ?)');
});
