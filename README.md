# 🌕 Mercury Parser

This Package does not generate any sound or visuals. This package only parses Mercury code and returns a JSON formatted parse tree. This is used in the [Mercury](https://github.com/tmhglnd/mercury) environment to translate the code to sound and visual objects. In a future version this will be used in a browser-based Mercury.
## 📟 Mercury? 

**Mercury is a minimal and human-readable language for the live coding of algorithmic electronic music.** 

[**🚀 Go to the Mercury Project**](https://github.com/tmhglnd/mercury)

[**🙏 Support Mercury by becoming a Patron**](https://www.patreon.com/bePatron?u=9649817) 

[**💬 Join the Discord Community!**](https://discord.gg/vt59NYU)
## How To Use This Parser

1. Run `npm install`

2. Open the `mercury.ne` file to view the grammar in the Nearley language including the moo tokenizer.

3. Run `npm run build`

	- Generates the the `grammar.js` parser file
	- Generates a minified es5 browser version in `/build`
	- Generates the railroad graph

4. Run a test with `npm test` and view result in `/test/tree`

## NPM dependencies

- [Nearley Parser Toolkit](https://nearley.js.org/)
- [Moo! Tokenizer/Lexer Generator](https://www.npmjs.com/package/moo)

# License

The GNU GPL-v.3