// 
// The default instrument objects for Mercury
// All instruments get a unique ID for the name upon initializing
// 

const objects = {
	'empty' : {
		'object' : '',
		'type' : '',
		'functions' : {
			'name' : `obj${uniqueID(8)}`,
			'group' : []
		}
	},
	'synth' : {
		'object' : '',
		'type' : 'saw',
		'functions' : {
			'name' : `obj${uniqueID(8)}`,
			'group' : [],
			'time' : [ '1', 0 ],
			'note' : [ 0, 0 ],
			'env' : [ 5, 500 ],
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
			'name' : `obj${uniqueID(8)}`,
			'group' : [],
			'time' : [ '1', 0 ],
			'speed' : [ 1 ],
			// 'note' : [ 0, 0 ],
			'env' : [ -1 ],
			'beat' : [ 1 ],
			'amp' : [ 0.9 ],
			'stretch': [0, 1, 1],
			'add_fx' : [],
		}
	}
}
module.exports = { objects };

function uniqueID(length){
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
	let s = '';

	for (let l=0; l<length; l++){
		s += chars[Math.floor(Math.random() * chars.length)];
	}
	return s;
}