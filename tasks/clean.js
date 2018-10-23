const del = require('del');
const paths = require('../paths');
const path = paths.path;
const env = require('../environment');

module.exports = function (done) {
    if(env.global === 'prod') {
		return del([path.dist], {force:true})
		.then(paths => {
			console.log('Deleted files and folders:\n', paths.join('\n'))
		});
	}

	return done();
};