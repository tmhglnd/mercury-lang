//
// Mercury Defaults
//
// Generate default values functions if present in this file.
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

const functionDefaults = {
	// overall instrument functions
	'time' : {
		'arguments' : [ 'interval', 'offset' ],
		'interval' : {
			'default' : 1/1,
			'min' : 0.125,
			'max' : 1
		},
		'offset' : {
			'default' : 0,
			'min' : 0,
			'max' : 1
		}
	},
	'beat' : {
		'arguments' : [ 'probability', 'reset' ],
		'probability' : {
			'default' : 1,
			'min' : 0,
			'max' : 1
		},
		'reset' : {
			'default' : 0,
			'min': 0,
			'max': 4
		}
	},
	'env' : {
		'arguments' : [ 'attack', 'sustain', 'release' ],
		'order' : {
			1 : [ 2 ],
			2 : [ 0, 2 ],
			3 : [ 0, 1, 2 ],
		},
		'attack' : {
			'default' : 1,
			'min' : 0,
			'max' : 250,
			'type' : 'int'
		},
		'sustain' : {
			'default' : 0,
			'min' : 0,
			'max' : 500,
			'type' : 'int'
		},
		'release' : {
			'default' : 250,
			'min' : 0,
			'max' : 1000,
			'type' : 'int'
		}
	},
	'amp' : {},
	'pan' : {},
	'add_fx' : {},
	'note' : {
		'arguments' : [ 'semitone', 'octave' ],
		'semitone' : {
			'default' : 0,
			'min' : -12,
			'max' : 12,
			'type' : 'int'
		},
		'octave' : {
			'default' : 0,
			'min' : -1,
			'max' : 3,
			'type' : 'int'
		}
	},
	'group' : {},
	'name' : {},
	// sample specific
	'speed' : {},
	'tune' : {},
	'offset' : {},
	'stretch' : {},
	// synth specific
	'slide' : {},
	'super' : {},
	'sub' : {},
	// midi specific
	'poly' : {},
	'out' : {},
	'clock' : {},
	// osc specific
	'address' : {},
}

// Extend the defaults dictionary with custom defaults
// This can also be used for overwriting default mappings
// 
function extendDefaults(extend){
	return;	
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

module.exports = { checkDefaults, extendDefaults }