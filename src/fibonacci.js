const fibonacci = (n) => {
	function do_fibo(a, b, n, resolve) {
		if (n < 1) {
			return resolve(b);
		}

		setTimeout(() => {
			do_fibo(b, a + b, n - 1, resolve);
		}, 0);
	}

	return new Promise((resolve) => {
		do_fibo(BigInt(0), BigInt(1), n - 1, resolve);
	});
};

console.time('fibonacci');
fibonacci(10000).then((val) => {
	console.timeEnd('fibonacci');
	console.log(`calculated value: ${val}`);
	// console.log(`memory usage: `, process.memoryUsage());
	const used = process.memoryUsage().heapUsed / 1024 / 1024;
	console.log(
		`The script uses approximately ${Math.round(used * 100) / 100} MB`,
	);
});
