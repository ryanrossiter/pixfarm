import game from './game';
import Defs from './defs';

const TILE_PSIZE = Defs.TILE_SIZE * Defs.PIXEL_SIZE;
const GROUND_LEVEL = Defs.GAME_HEIGHT - TILE_PSIZE;

const TILE_UPDATE_DELTA = 500; // every .5 seconds

function getTileTextureName(tile) {
    return 'TILE_' + Object.keys(Defs.TILES)[tile];
}

export default class Terrain {
    constructor() {
        this.map = this.mapSprites = null;
        game.add.tileSprite(0, GROUND_LEVEL, Defs.GAME_WIDTH, Defs.GAME_HEIGHT, 'TILE_UNDERGROUND');
    
        this.createMap(50);

        this.tileUpdateTimer = TILE_UPDATE_DELTA;
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
            this.map[i] = Defs.TILES.GRASS;
            if (i > 5 && i % 2 == 0) this.map[i] = Defs.TILES.PLOT;
            this.mapSprites[i] = game.add.sprite(
                (i + 0.5) * TILE_PSIZE, GROUND_LEVEL,
                getTileTextureName(this.map[i])
            );

            this.mapSprites[i].anchor.y = 1; // anchor to ground level
            this.mapSprites[i].anchor.x = 0.5; // anchor at center of tile
        }
    }

    getTile(t) {
        if (typeof t !== 'number' || t < 0 || t >= this.map.length) return null;
        return this.map[t];
    }

    setTile(t, tile) {
        if (typeof t !== 'number' || t < 0 || t >= this.map.length) return;
        this.map[t] = tile;
        this.mapSprites[t].loadTexture(getTileTextureName(tile));
    }

    canInteract(t) {
        let tile = this.getTile(t);
        return (tile === Defs.TILES.PLOT)
            || (tile === Defs.TILES.PLANT
                && this.mapSprites[t].animations.frame === this.mapSprites[t].animations.frameTotal - 1);
    }

    update() {
        this.tileUpdateTimer -= game.time.elapsedMS;
        if (this.tileUpdateTimer <= 0) {
            this.tileUpdateTimer = TILE_UPDATE_DELTA;

            for (var i = 0; i < this.map.length; i++) {
                if (this.map[i] === Defs.TILES.PLANT) {
                    if (this.mapSprites[i].animations.frame < this.mapSprites[i].animations.frameTotal - 1) {
                        // not done growing
                        if (Math.random() < 0.15) {
                            this.mapSprites[i].animations.frame = this.mapSprites[i].animations.frame + 1;
                        }
                    }
                }
            }
        }
    }
}