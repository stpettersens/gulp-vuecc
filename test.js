'use strict'

const vuecc = require('vuecc-compiler')
vuecc.cli('vuecc', 'greeter.vue.ts', 'greeter.js', ['--quiet', '--no-header'])
