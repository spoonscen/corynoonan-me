const _ = require('lodash')
const { jsdom } = require('jsdom')

global['document'] = jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global['window'] = _.extend(global['window'], document.defaultView);
global['navigator'] = { userAgent: 'node.js' };
