/* jshint node: true */
'use strict';

var chalk = require('chalk');
var linewrap = require('linewrap');

var INDENT_SIZE = 10;
var LINE_SIZE = 85;

var quotes = [
  {
    text: 'As a tech community, we must treat documentation, marketing, logistics, infrastructure, art, etc. work with as much respect as engineering.',
    author: 'Yehuda Katz'
  }, {
    text: 'To maximize your impact in software, empower other developers.',
    author: 'Yehuda Katz'
  }
];

module.exports = {
  name: 'ember-empathy',
  preBuild: function() {

    if (process.env.EMBER_ENV === 'production') {
      return;
    }

    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var finalQuote = chalk.bold.italic('"' + quote.text + '"') + '\n\t— ' + chalk.inverse(quote.author);
    var wrap = linewrap(INDENT_SIZE, INDENT_SIZE + LINE_SIZE, { whitespace: 'all' });

    this.project.ui.writeLine('');
    this.project.ui.writeLine(wrap(finalQuote));
    this.project.ui.writeLine('');
    this.project.ui.spinner.start();
  }
};
