const State = {
	coins: 0,
	mailQueue: [],

	reset: function() {
		this.coins = 0;
		this.mailQueue = [];
	}
}

export default State;