console.time('program');

setTimeout(() => {
	const used = process.memoryUsage().heapUsed / 1024 / 1024;
	console.log(
		`The script uses approximately ${Math.round(used * 100) / 100} MB`,
	);
	console.timeEnd('program');
	process.exit();
}, 10 * 1000);

const off = () => {
	setTimeout(() => {
		on();
	}, 0);
};
const on = () => {
	setTimeout(() => {
		off();
	}, 0);
};

const lamp = () => on();

lamp();
