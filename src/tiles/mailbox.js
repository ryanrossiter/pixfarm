import game from '../game';
import Utils from '../utils';
import Defs from '../defs';
import State from '../state';

import Tile from './tile';

export default class Mailbox extends Tile {
	constructor(tile, sprite) {
		super(tile, sprite);
	}

	get hasMail() {
		return State.mailQueue.length > 0;
	}

	canInteract() {
		return this.hasMail;
	}

	interact(replaceTile) {
		this.hasMail = !this.hasMail;
		game.add.sprite(this.sprite.x, 30, Utils.CreateDialog(35, 15)).anchor.x = 0.5;
	}

	update() {
		let frame = (this.hasMail? 1: 0);
		if (frame !== this.sprite.animations.frame) {
			this.sprite.animations.frame = frame;
		}
	}
}