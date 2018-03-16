#!/usr/bin/env node

const program = require('commander')

program.parse(process.argv)

const args = program.args.map(arg => parseInt(arg))

if (args.length !== 2) {
	program.help()
}

console.log(args[0] + args[1])
