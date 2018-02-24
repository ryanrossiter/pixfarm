import Defs from '../defs';
import Tile from './tile';

export default class Plot extends Tile {
	canInteract() {
		return true;
	}

	interact(replaceTile) {
		replaceTile(Defs.TILES.PLANT);
	}
}