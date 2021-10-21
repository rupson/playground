const off = () => {
	console.log('off!');
	on();
};
const on = () => {
	console.log('on!');
	off();
};

export const lamp = () => on();

lamp();
