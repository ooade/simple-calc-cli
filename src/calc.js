#!/usr/bin/env node

'use strict'

const program = require('commander')

const pkg = require('../package.json')

program
	.version(pkg.version, '-v, --version')
	.command('add <first> <second>', 'Add two numbers', parseInt)
	.command('sub <first> <second>', 'Subtract the second number from the first')
	.command(
		'mul <first> <second>',
		'Multiplies the first number with the second'
	)
	.command('div <first> <second>', 'Divides the first number with the first')
	.parse(process.argv)
