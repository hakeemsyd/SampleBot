var debug = require('debug')('default.js');

module.exports = 
[
	function (session) {
		session.beginDialog('/profile');
	},
	function (session, results) {
		session.send('Ok... Changed your name to %s', session.userData.name);
	}
];
