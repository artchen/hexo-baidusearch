'use strict';

var baidusearch = require('./lib/baidusearch');

hexo.extend.console.register('baidusearch', 'Index posts on Baidu Search', {
  options: []
}, baidusearch);