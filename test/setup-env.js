const _ = require('lodash')
const jsdom = require('jsdom')
const ReactDOM = require('react-dom')
require('babel-polyfill')
require('ts-node').register({ disableWarnings: false })

const mockDocument = '<!doctype html><html><body><div id="app"></div></body></html>'

global['document'] = jsdom.jsdom(mockDocument);
global['window'] = global['window'] || {};
global['window'] = _.extend(global['window'], document.defaultView);
global['navigator'] = { userAgent: 'node.js' };


if (typeof afterEach !== 'undefined') {
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  });
};

