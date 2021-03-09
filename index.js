// ===================================================================
// Mercury grammar, lexer and parser
// 
// written by Timo Hoogland (c) 2020, www.timohoogland.com
// The GNU GPL-v3 License
// ===================================================================

// require the parser function
const mercuryParser = require('./src/mercuryParser.js').mercuryParser;

// export the parser function
module.exports = { mercuryParser }