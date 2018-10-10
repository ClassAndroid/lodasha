const _ = {};

// _.chunk(array, [size=1])
const ch = (arr, size) => {
	const resultArr = []

	arr.reduce((res, current, i) => {
		if (i < size) {
			res.concat(current);
		}
	}, [])
}