import Defs from '../defs';
import Tile from './tile';
import game from '../game';
import State from '../state';

export default class Plant extends Tile {
	constructor(tile, sprite) {
		super(tile, sprite);
		this.sprite.scale.x = (Math.random() < 0.5? 1 : -1);
	}

	isDoneGrowing() {
		return this.sprite.animations.frame === this.sprite.animations.frameTotal - 1;
	}

	canInteract() {
		return this.isDoneGrowing();
	}

	interact(replaceTile) {
		if (this.isDoneGrowing()) {
			let coin1 = game.add.sprite(this.sprite.x - 16 * this.sprite.scale.x, this.sprite.y - 64, 'coin');
			let coin2 = game.add.sprite(this.sprite.x + 16 * this.sprite.scale.x, this.sprite.y - 73, 'coin');
			coin1.anchor.x = coin2.anchor.x = 0.5;

			game.add.tween(coin1).to({ y: '-50', alpha: 0 }, 500, "Linear", true);
			game.add.tween(coin2).to({ y: '-50', alpha: 0 }, 500, "Linear", true);
			State.coins += 2;
			
			replaceTile(Defs.TILES.PLOT);
		}
	}

	update() {
		if (this.isDoneGrowing() === false) {
            if (Math.random() < 0.15) {
                this.sprite.animations.frame = this.sprite.animations.frame + 1;
            }
        }
	}
}