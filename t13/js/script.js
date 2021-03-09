function Calculator() {
	this.res = 0;
	this.init = (num) => {
		this.res = num;
		return this;
	}
	this.add = (num) => {
		this.res += num;
		return this;
	}
	this.sub = (num) => {
		this.res -= num;
		return this;
	}
	this.mul = (num) => {
		this.res *= num;
		return this;
	}
	this.div = (num) => {
		this.res /= num;
		return this;
	}
	this.alert = () => {
		setTimeout(() => alert(this.res), 5000);
		return this;
	}
}