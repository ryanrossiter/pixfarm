import Defs from '../defs';

function getTileTextureName(tile) {
    return 'TILE_' + Object.keys(Defs.TILES)[tile];
}

export default class Tile {
	constructor(tile, sprite) {
		this.tile = tile;

		this.sprite = sprite;
		this.sprite.loadTexture(getTileTextureName(tile));
		this.sprite.scale.x = 1; // reset scale in case it was previously changed
	}

	canInteract() {
		return false;
	}

	interact(terrain) {

	}

	update() {

	}
}