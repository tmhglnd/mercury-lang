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
		interval : {
			default : 1/1,
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
		arguments : [ 'probability', 'reset' ],
		probability : {
			default : 1,
			min : 0,
			max : 1
		},
		reset : {
			default : 0,
			min : 0,
			max : 4,
			type : 'int'
		}
	},
	ratchet : {
		arguments : [ 'probability', 'multiplication' ],
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
		arguments : [ 'amplitude', 'ramptime' ],
		amplitude : {
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
			default : 0.11,
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
		arguments : [ 'amplitude' ],
		amplitude : {
			default : 0.5,
			min : 0,
			max : 1
		}
	},
	noise : {
		arguments : [ 'amplitude', 'color', 'modulation' ],
		amplitude : {
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
	// group : {},
	// name : {},
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
	}
	// osc specific TO DO
	// address : {},
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

function checkDefaults(func, args){
	// get the default settings from the dictionary if they are in there
	if (functionDefaults[func]){
		// get all the default arguments
		let defaults = functionDefaults[func].arguments.map((a) => {
			return functionDefaults[func][a].default;
		});
		// remove the arguments that are too many
		args = args.slice(0, defaults.length);

		// does the function allow for a different order of parameters?
		let order = functionDefaults[func].order[args.length];
		// console.log('ordermap', order);

		// for all the arguments check for # (default) or ? (random)
		// and perform these tasks if necessary
		for (let i=0; i<args.length; i++){
			// use the order index if there is one for this args amount
			let idx = (order)? order[i] : i;

			// console.log('mapping', i, args[i], defaults[i]);
			// if (args[i] === '#'){
			// 	args[i] = defaults[i];
			// } else 
			if (args[i] === '?'){
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
		console.log('mapped', defaults);
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
testDefaults();

module.exports = { checkDefaults, extendDefaults, getDefaults }