import game from './game';
import Defs from './defs';

const TILE_PSIZE = Defs.TILE_SIZE * Defs.PIXEL_SIZE;
const GROUND_LEVEL = Defs.GAME_HEIGHT - TILE_PSIZE;

export default class Terrain {
    constructor() {
        this.map = this.mapSprites = null;
        game.add.tileSprite(0, GROUND_LEVEL, Defs.GAME_WIDTH, Defs.GAME_HEIGHT, 'TILE_UNDERGROUND');
    
        this.createMap(50);
    }

    createMap(w) {
        if (this.map || this.mapSprites) {
            throw Error("Map already created");
        }

        if (typeof w !== 'number' || w <= 0) {
            throw Error("Invalid map width: " + w);
        }

        this.map = [];
        this.mapSprites = [];

        for (var i = 0; i < w; i++) {
            this.map[i] = Defs.TILES.GROUND;
            if (i > 5) this.map[i] = Defs.TILES.PLOT;
            this.mapSprites[i] = game.add.sprite(i * TILE_PSIZE, GROUND_LEVEL,
                'TILE_' + Object.keys(Defs.TILES)[this.map[i]]
            );

            this.mapSprites[i].anchor.y = 1; // anchor to ground level
        }
    }

    getTile(t) {
        if (typeof t !== 'number' || t < 0 || t >= this.map.length) return null;
        return this.map[t];
    }

    canInteract(t) {
        return this.getTile(t) === Defs.TILES.PLOT;
    }
}