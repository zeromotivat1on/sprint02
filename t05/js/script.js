function total(addCount, addPrice, currentTotal = 0) {
	let res = (Number(addCount) * Number(addPrice)) + Number(currentTotal);
	return Number.parseFloat(res).toFixed(2);
}