// 
// The default instrument objects for Mercury
// 

const emptyDefault = {
	'empty' : {
		'object' : '',
		'type' : '',
		'functions' : {
			'group' :	[],
			'time' : 	[ '1/1', 0 ],
			'beat' : 	[ 1, -1 ],
			'amp' :		[ 1 ],
			'env' :		[ 1, 250 ],
			'pan' : 	[ 0 ],
			'note' :	[ 0, 0 ],
			'add_fx' : 	[]
		}
	},
}

const instrumentDefaults = {
	'synth' : {
		'type' : 'saw',
		'functions' : {
			'amp' :		[ 0.7 ],
			'wave2' : 	[ 'saw', 0 ]
		}
	},
	'polySynth' : {
		'type' : 'saw',
		'functions' : {
			'amp' : 	[ 0.7 ],
			'wave2' : 	[ 'saw', 0 ]
		}
	},
	'sample' : {
		'type' : 'kick_909',
		'functions' : {
			'env' : 	[ -1 ],
			'amp' : 	[ 0.9 ],
			'stretch' : [ 0, 1, 1 ],
			'speed' :	[ 1 ],
			'note' :	[ 'off' ],
			'tune' :	[ 60 ]
		}
	},
	'loop' : {
		'type' : 'amen',
		'functions' : {
			'env' : 	[ -1 ],
			'amp' : 	[ 0.9 ],
			'stretch' : [ 1, 1, 1 ],
			'speed' :	[ 1 ],
			'note' :	[ 'off' ],
			'tune' :	[ 60 ]
		}
	},
	'midi' : {
		'type' : 'default',
		'functions' : {
			'env' : 	[ 250 ],
			'out' : 	[ 1 ],
			'chord' : 	'off',
			'sync' : 	'off'
		}
	},
	'input' : {
		'type' : 'default',
		'functions' : {
			'env' : 	[ -1 ],
			'amp' : 	[ 0.9 ],
			'note' :	[ 'off' ]
		}
	}
}

// merge the default empty object and the additional defaults
Object.keys(instrumentDefaults).forEach((o) => {
	let empty = JSON.parse(JSON.stringify(emptyDefault.empty));
	instrumentDefaults[o] = deepMerge(empty, instrumentDefaults[o]);
});
// add the empty default
Object.assign(instrumentDefaults, emptyDefault);
// instrumentDefaults = { ...instrumentDefaults, ...emptyDefault };

// Return true if input is object
// 
function isObject(item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}
  
// Deep merge two objects
// thanks to https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
// 
function deepMerge(target, ...sources) {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, {
					[key]: {}
				});
				deepMerge(target[key], source[key]);
			} else {
				Object.assign(target, {
					[key]: source[key]
				});
			}
		}
	}
	return deepMerge(target, ...sources);
}
/*
const instrumentDefaults = {
	'empty' : {
		'object' : '',
		'type' : '',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			'beat' : [ 1 ],
			'add_fx' : []
		}
	},
	'synth' : {
		'object' : '',
		'type' : 'saw',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			'note' : [ 0, 0 ],
			'env' : [ 1, 250 ],
			'beat' : [ 1 ],
			'amp' : [ 0.7 ],
			'wave2' : [ 'saw', 0 ],
			'add_fx' : [],
		}
	},
	'polySynth' : {
		'object' : '',
		'type' : 'saw',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			'note' : [ 0, 0 ],
			'env' : [ 1, 250 ],
			'beat' : [ 1 ],
			'amp' : [ 0.7 ],
			'wave2' : [ 'saw', 0 ],
			'add_fx' : [],
		}
	},
	'sample' : {
		'object' : '',
		'type' : 'kick_909',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			'speed' : [ 1 ],
			// 'note' : [ 0, 0 ],
			'env' : [ -1 ],
			'beat' : [ 1 ],
			'amp' : [ 0.9 ],
			'stretch': [0, 1, 1],
			'add_fx' : [],
		}
	},
	'loop' : {
		'object' : '',
		'type' : 'amen',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			'speed' : [ 1 ],
			// 'note' : [ 0, 0 ],
			'env' : [ -1 ],
			'beat' : [ 1 ],
			'amp' : [ 0.9 ],
			'stretch': [ 1, 1, 1 ],
			'add_fx' : [],
		}
	},
	'midi' : {
		'object' : '',
		'type' : 'default',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			// 'note' : [ 0, 0 ],
			'env' : [ 100 ],
			'out' : [ 1 ],
			'chord' : 'off',
			'sync' : 'off',
			'add_fx' : []
		}
	},
	'input' : {
		'object' : '',
		'type' : 'default',
		'functions' : {
			'group' : [],
			'time' : [ '1/1', 0 ],
			'env' : [ -1 ],
			'amp' : [ 0.9 ],
			'add_fx' : []
		}
	}
}
*/
module.exports = { instrumentDefaults };