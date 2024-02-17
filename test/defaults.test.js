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

	let expected = {
		s0: {
			object: 'synth',
			type: 'saw',
			functions: {
				group: [],
				time: [ '1/1', 0 ],
				note: [ 0, 0 ],
				env: [ 1, 250 ],
				beat: [ 1, -1 ],
				amp: [ 0.7 ],
				pan: [ 0 ],
				wave2: [ 'saw', 0 ],
				add_fx: [ 
					[ 'distort', 3, 1 ], 
					[ 'degrade', 0.5, 1 ],
					[ 'comb', 0, 0.8, 0.5 ],
					[ 'reverb', 0.5, 10, 10, 0.5],
					[ 'delay', '2/16', '3/16', 0.8, 0.6, 0.5 ],
					[ 'filter', 'low', '1/1', 200, 3000, 0.45, 0.5, 2 ],
					[ 'triggerFilter', 'low', 1, '1/16', 4000, 100, 1 ],
					[ 'chorus', '8/1', 45, 0.5 ],
					[ 'double', '8/1', 8, 1 ]
				],
				name: [ 's0' ]
			}
		}
	}
	let code = 'new synth saw name(s0) fx(drive) fx(chip) fx(comb) fx(room) fx(echo) fx(modFilter) fx(trigFilter) fx(chorus) fx(double)';
	expect(Mercury(code).parseTree.objects).toStrictEqual(expected);

});
