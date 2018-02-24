import Defs from '../defs';
import Tile from './tile';

export default class Coop extends Tile {
	constructor(tile, sprite) {
		super(tile, sprite);

		this.empty = tile === Defs.TILES.COOP_EMPTY;
	}

	canInteract() {
		return this.empty;
	}

	interact(replaceTile) {
		if (this.empty) replaceTile(Defs.TILES.COOP);
	}

	update() {
		if (this.empty === false) {
			this.sprite.animations.frame = this.sprite.animations.frame + 1;

			if (Math.random() < 0.1) this.sprite.scale.x *= -1; // randomly switch direction
		}
	}
}