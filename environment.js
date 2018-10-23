let getArg = (key) => {
	var index = process.argv.indexOf(key);
	var next = process.argv[index + 1];
	return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}
  
global.env = getArg('--env') ? getArg('--env') : 'dev';
process.env.NODE_ENV = getArg('--env') === 'prod' ? 'production' : 'development';

module.exports = {
    global: global.env,
    process: process.env.NODE_ENV
}