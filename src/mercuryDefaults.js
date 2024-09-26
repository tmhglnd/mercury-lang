//
// mercuryDefaults.js
//
// Generate default values for functions if present in this file.
// Using a # places the default value in a larger list of arguments
// Using a ? generates a random value for that argument based on min/max/type
//
// Every function defaults work as follows:
// name : {
// 	arguments : [ arg-1, arg-2, ..., arg-n ],
//  aliases : {
// 		// specify aliases for the argument names to work with the 
// 		// '=' sign to apply an argument to a specific name
// 		a1 : arg-1,
// 		a2 : arg-2, 
// 		etc...
// 	}
// 	order : { 
// 		// specify an order if the arguments should be mapped
// 		// differently when less arguments are provided
// 		1 : [ 2 ] // if there is one argument, it will be mapped to index 2
// 	}
// 	arg-1 : {
// 		default : value,
// 		min : minimum value for random number generator
// 		max : maximum value for random number generator
// 		type : int (if random number needs to be integer)
// 	},
// 	arg-2 : { etc... }
// }
// 
// The defaults can be check with checkDefaults()
// The defaults can be get with getDefaults()
// The defaults dictionary can be extended with extendDefaults()
// The defaults can be tested for missing keys with testDefaults()
// 

const functionDefaults = {
	// overall instrument functions
	time : {
		arguments : [ 'interval', 'offset' ],
		aliases: {
			i : 'interval',
			intv : 'interval',
			o : 'offset',
			offs : 'offset'
		},
		interval : {
			default : '1/1',
			min : 0.125,
			max : 1
		},
		offset : {
			default : 0,
			min : 0,
			max : 1
		}
	},
	beat : {
		arguments : [ 'probability', 'resync' ],
		aliases : {
			p : 'probability',
			prob : 'probability',
			s : 'resync',
			sync : 'resync'
		},
		probability : {
			default : 1,
			min : 0,
			max : 1
		},
		resync : {
			default : -1,
			min : 0,
			max : 4,
			type : 'int'
		}
	},
	ratchet : {
		arguments : [ 'probability', 'multiplication' ],
		aliases : {
			p : 'probability',
			prob : 'probability',
			m : 'multiplication',
			mult : 'multiplication',
		},
		probability : {
			default : 0.1,
			min : 0,
			max : 1
		},
		multiplication: {
			default : 2,
			min : 2,
			max : 8,
			type : 'int'
		}
	},
	warp : {
		arguments : [ 'warps' ],
		warps : {
			default : 1,
			min : 1,
			max : 8,
			type : 'int'
		}
	},
	human : {
		arguments : [ 'delaytime' ],
		delaytime : {
			default : 10,
			min : 1,
			max : 100,
		}
	},
	env : {
		arguments : [ 'attack', 'sustain', 'release' ],
		order : {
			1 : [ 2 ],
			2 : [ 0, 2 ],
			3 : [ 0, 1, 2 ],
		},
		attack : {
			default : 1,
			min : 0,
			max : 250
		},
		sustain : {
			default : 0,
			min : 0,
			max : 500
		},
		release : {
			default : 250,
			min : 0,
			max : 1000
		}
	},
	amp : {
		arguments : [ 'amount', 'ramptime' ],
		amount : {
			default : 0.9,
			min : 0,
			max : 1
		},
		ramptime : {
			default : 0,
			min : 0,
			max : 5000
		}
	},
	pan : {
		arguments : [ 'position' ],
		position : {
			default : 0,
			min : -1,
			max : 1
		}
	},
	add_fx : {
		arguments : [ 'effectname' ],
		effectname : {
			default : 0,
			min : 0,
			max : 0
		}
	},
	note : {
		arguments : [ 'semitone', 'octave' ],
		semitone : {
			default : 0,
			min : -12,
			max : 12,
			type : 'int'
		},
		octave : {
			default : 0,
			min : 0,
			max : 3,
			type : 'int'
		}
	},
	// synth specific
	super : {
		arguments : [ 'voices' , 'detuning' ],
		voices : {
			default : 3,
			min: 2,
			max: 7,
			type: 'int'
		},
		detuning : {
			default : 0.1,
			min: 0.05,
			max: 0.5
		}
	},
	slide : {
		arguments : [ 'slidetime' ],
		slidetime : {
			default : 50,
			min : 5,
			max : 200
		}
	},
	sub : {
		arguments : [ 'gain' ],
		gain : {
			default : 0.5,
			min : 0,
			max : 1
		}
	},
	noise : {
		arguments : [ 'gain', 'color', 'modulation' ],
		gain : {
			default : 0.5,
			min : 0,
			max : 1
		},
		color : {
			default : 0.8,
			min : 0,
			max : 1
		},
		modulation : {
			default : 0,
			min : 0,
			max : 2,
			type : 'int'
		}
	},
	// group : {}, // not necessary to default these I think
	// name : {}, // not necessary to default these I think
	// sample specific
	speed : {
		arguments : [ 'speed' ],
		speed : {
			default : 1,
			min : 0.125,
			max : 2
		}
	},
	offset : {
		arguments : [ 'position' ],
		position : {
			default : 0,
			min : 0,
			max : 1
		}
	},
	tune : {
		arguments : [ 'pitch' ],
		pitch : {
			default : 60,
			min : 36,
			max : 72,
			type : 'int'
		}
	},
	stretch : {
		arguments : [ 'enable', 'timestretch', 'stretchmode' ],
		enable : {
			default : 1,
			min : 0, 
			max : 2,
			type : 'int'
		},
		timestretch : {
			default : 0,
			min : 0, 
			max : 2,
			type: 'int'
		},
		stretchmode : {
			default : 'efficient',
			min : 0,
			max : 0,
			type : 'int'
		}
	},
	// polyphonic specific
	steal : {
		arguments : [ 'enable' ],
		enable : {
			default : 1,
			min : 0,
			max : 2,
			type : 'int'
		}
	},
	spread : {
		arguments : [ 'delaytime', 'randomoffset' ],
		delaytime : {
			default : 25,
			min : 0,
			max : 250,
		}, 
		randomoffset : {
			default : 0,
			min : 0,
			max : 250
		}
	},
	voices : {
		arguments : [ 'amount' ],
		amount : {
			default : 8,
			min : 2,
			max : 32,
			type : 'int'
		}
	},
	// midi specific
	out : {
		arguments : [ 'output' ],
		output : {
			default : 0,
			min : 0,
			max : 16,
			type : 'int'
		}
	},
	chord : {
		arguments : [ 'enable' ],
		enable : {
			default : 1,
			min : 0,
			max : 2,
			type : 'int'
		}
	},
	clock : {
		arguments : [ 'enable' ],
		enable : {
			default : 1,
			min : 0,
			max : 2,
			type : 'int'
		}
	},
	change : { // currently not working want is add_fx for MIDI
		arguments : [ 'control', 'value' ],
		control : {
			default : 0,
			min : 0,
			max : 128,
			type : 'int'
		},
		value : {
			default : 63,
			min : 0,
			max : 128,
			type : 'int'
		}
	},
	// modulator specific
	range : {
		arguments : [ 'low', 'high', 'exponent' ],
		low : {
			default : 0,
			min : 0,
			max : 1
		},
		high : {
			default : 1,
			min : 0,
			max : 1
		},
		exponent : {
			default : 1,
			min : 0,
			max : 4
		}
	},
	// osc specific TO DO
	// address : {},
	// effects
	comb : {
		arguments : [ 'pitch', 'feedback', 'wet' ],
		pitch : {
			default : 0,
			min : -12,
			max : 12,
			type : 'int'
		},
		feedback : {
			default : 0.8,
			min : 0,
			max : 0.99
		},
		wet : {
			default : 0.5,
			min : 0,
			max : 1
		}
	},
	chorus : {
		arguments : [ 'modulation', 'depth', 'wet' ],
		modulation : {
			default : '8/1',
			min : 0.0625,
			max : 8
		},
		depth : {
			default : 45,
			min : 1,
			max : 100
		},
		wet : {
			default : 0.5,
			min : 0,
			max : 1
		}
	},
	double : {
		arguments : [ 'modulation', 'depth', 'wet' ],
		modulation : {
			default : '8/1',
			min : 0.0625,
			max : 8
		},
		depth : {
			default : 8,
			min : 1,
			max : 100
		},
		wet : {
			default : 1,
			min : 0,
			max : 1
		}
	},
	degrade : {
		arguments : [ 'amount', 'wet' ],
		amount : {
			default : 0.5,
			min : 0,
			max : 1
		},
		wet : {
			default : 1,
			min : 0,
			max : 1
		}
	},
	delay : {
		arguments : [ 'delayL', 'delayR', 'feedback', 'damping', 'wet' ],
		order : {
			// 1 : [ [1, 2] ],
			// 2 : [ [1, 2], 3 ]
		},
		delayL : {
			default : '2/16',
			min : 0.0625,
			max : 0.5
		}, 
		delayR : {
			default : '3/16',
			min : 0.0625,
			max : 0.5
		},
		feedback : {
			default : 0.8,
			min : 0.1,
			max : 0.99
		},
		damping : {
			default : 0.6,
			min : 0.1,
			max : 1
		},
		wet : {
			default : 0.5,
			min : 0.1,
			max : 1
		}
	},
	distort : {
		arguments : [ 'amount', 'wet' ],
		amount : {
			default : 3,
			min : 1, 
			max : 20
		},
		wet : {
			default : 1,
			min : 0,
			max : 1
		}
	},
	filter : {
		arguments : [ 'filterType', 'modulation', 'lowFrequency', 'highFrequency', 'resonance', 'direction', 'exponent' ],
		// shorts : [ 'tp', 'mod', 'lo', 'hi', 'q', 'dir', 'exp' ],
		order : {
			// 1 : [ [2, 3] ],
			// 2 : [ [2, 3], 4 ],
			// 3 : [ 1, [2, 3], 4 ]
		},
		aliases : {
			t : 'filterType',
			type : 'filterType',
			m : 'modulation',
			mod : 'modulation',
			l : 'lowFrequency',
			lo : 'lowFrequency',
			h : 'highFrequency',
			hi : 'highFrequency',
			r : 'resonance',
			res : 'resonance',
			d : 'direction',
			dir : 'direction',
			e : 'exponent',
			exp : 'exponent',
		},
		filterType : {
			default : 'low',
			options: [ 'low', 'high', 'band' ],
			min : 0,
			max : 3
		},
		modulation : {
			default : '1/1',
			min : 0.0625,
			max : 8
		},
		lowFrequency : {
			default : 200,
			min : 10,
			max : 18000
		},
		highFrequency : {
			default : 3000,
			min : 10,
			max : 18000
		},
		resonance : {
			default : 0.45,
			min : 0,
			max : 0.99
		},
		direction : {
			default : 0.5,
			min : 0,
			max : 1
		},
		exponent : {
			default : 2,
			min : 0.05,
			max : 4,
		},
	},
	triggerFilter : {
		arguments : [ 'filterType', 'attack', 'release', 'highFrequency', 'lowFrequency', 'exponent' ],
		order : {
			1 : [ 2 ],
			2 : [ 2, 3 ],
			3 : [ 2, 3, 5 ],
		},
		aliases : {
			t : 'filterType',
			type : 'filterType',
			a : 'attack',
			atk : 'attack',
			r : 'release',
			rel : 'release', 
			h : 'highFrequency',
			hi : 'highFrequency',
			l : 'lowFrequency',
			lo : 'lowFrequency',
			e : 'exponent',
			exp : 'exponent'
		},
		filterType : {
			default : 'low',
			choices : [ 'low', 'high', 'band' ],
			min : 0,
			max : 3
		},
		attack : {
			default : 1,
			min : 0,
			max : 250
		},
		release : {
			default : '1/16',
			min : 0,
			max : 1000
		},
		highFrequency : {
			default : 4000,
			min : 10,
			max : 18000
		},
		lowFrequency : {
			default : 100,
			min : 10,
			max : 18000
		},
		exponent : {
			default : 1,
			min : 0.05,
			max : 4
		},
	},
	// freeze : {},
	// kink : {},
	reverb : {
		arguments : [ 'gain', 'size', 'slide', 'wet' ],
		aliases : {
			g : 'gain',
			s : 'size',
			w : 'wet'
		},
		gain : {
			default : 0.5,
			min : 0,
			max : 2
		},
		size : {
			default : 10,
			min : 0,
			max : 20
		},
		slide : {
			default : 10,
			min : 1,
			max : 100
		},
		wet : {
			default : 0.5,
			min : 0,
			max : 1
		}
	},
	// shift : {},
	// squash : {},
	// tremolo : {},
	// vibrato : {},
	// vocoder : {},
}

// Extend the defaults dictionary with custom defaults
// This can also be used for overwriting default mappings
// 
function extendDefaults(extend){
	return;	
}

function getDefaults(func){
	return functionDefaults[func];
}

function checkDefaults(func, args, vars){
	// console.log('check', func, 'args', args);

	// get the default settings from the dictionary if they are in there
	if (functionDefaults[func]){
		// get all the default arguments
		let defaults = functionDefaults[func].arguments.map((a) => {
			return functionDefaults[func][a].default;
		});
		// remove the arguments that are too many
		// maybe not if we can also use the '=' sign
		args = args.slice(0, defaults.length);

		// does the function allow for a different order of parameters?
		let order;
		if (functionDefaults[func].order){
			order = functionDefaults[func].order[args.length];
		}
		// console.log('ordermap', order);

		// for all the arguments check for # (default) or ? (random)
		// also check fo = (setting via key=value pair)
		// and perform these tasks if necessary
		for (let i=0; i<args.length; i++){
			// use the order index if there is one for this args amount
			let idx = (order)? order[i] : i;

			// console.log('mapping', i, args[i], defaults[i]);
			if (String(args[i]).match(/[^=]+\=[^=]+/g)){
				let set = args[i].split('=');

				// check if the value has an alias, then use it
				if (functionDefaults[func].hasOwnProperty('aliases')){
					set[0] = functionDefaults[func].aliases[set[0]];
				}
				// what is the index of the key as argument in the list
				let idS = functionDefaults[func].arguments.indexOf(set[0]);

				// only apply set if part of the function description
				if (idS >= 0){
					let v = set[1];
					// convert to Number if not NaN
					defaults[idS] = isNaN(v) ? v : Number(v);
					// replace by the array content if an array
					if (vars.hasOwnProperty(v)){
						defaults[idS] = vars[v];
					}
				}
			} else if (args[i] === '?'){
				let param = functionDefaults[func].arguments[i];
				let min = functionDefaults[func][param].min;
				let max = functionDefaults[func][param].max;
				let type = functionDefaults[func][param].type;

				let rnd = Math.random() * (max - min) + min;
				// args[i] = (type === 'int') ? Math.floor(rnd) : rnd;
				defaults[idx] = (type === 'int') ? Math.floor(rnd) : rnd;
			} else if (args[i] !== '#'){
				defaults[idx] = args[i]
			}
		}
		args = defaults;
		// console.log('mapped', func, 'to', defaults);
	}
	// return (adjusted) arguments
	return args;
}

function testDefaults(){
	// test all the defaults to check they have correct keys
	Object.keys(functionDefaults).forEach((f) => {
		if (!functionDefaults[f].hasOwnProperty('arguments')){
			console.log(`${f} misses property arguments`);
		}
		if (!Array.isArray(functionDefaults[f].arguments)){
			console.log(`${f} arguments is not an array`);
		}
		Object.keys(functionDefaults[f]).forEach((k) => {
			if (k !== 'arguments' && k !== 'order'){
				if (!functionDefaults[f][k].hasOwnProperty('default')){
					console.log(`${f}.${k} misses property default`);
				}
				if (!functionDefaults[f][k].hasOwnProperty('min')){
					console.log(`${f}.${k} misses property min`);
				}
				if (!functionDefaults[f][k].hasOwnProperty('max')){
					console.log(`${f}.${k} misses property max`);
				}
			}
		})
	});
}
// testDefaults();

module.exports = { checkDefaults, extendDefaults, getDefaults }