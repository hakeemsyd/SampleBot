var builder = require('botbuilder');
var debug = require('debug')('profile.js');

module.exports = 
[
	function (session) {
		builder.Prompts.text(session, 'Hi! What is your name?');
	},
	function (session, results) {
		session.userData.name = results.response;
		session.endDialog();
	}
];
