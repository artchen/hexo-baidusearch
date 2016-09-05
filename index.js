'use strict';

var baidusearch = require('./lib/baidusearch');

hexo.extend.generator.register('baidusearch', baidusearch);