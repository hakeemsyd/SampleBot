var debug = require('debug')('default.js');

module.exports = 
[
	function (session, args, next) {
		if (!session.userData.name) {
			session.beginDialog('/profile');
		} else {
			next();
		}
	},
	function (session, results) {
		session.send('Hello %s!', session.userData.name);
	}
];
