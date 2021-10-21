import * as R from 'remeda';

const log = (msg: string) => () => console.log(msg);

const off = () => {
	console.log('off!');
	on(null);
};
const on = R.createPipe(log('on!'), off);

export const lamp = () => on(null);

lamp();
