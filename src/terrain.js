import game from './game';
import Defs from './defs';

import TileFactory from './tiles/tilefactory';

const TILE_PSIZE = Defs.TILE_SIZE * Defs.PIXEL_SIZE;
const GROUND_LEVEL = Defs.GAME_HEIGHT - TILE_PSIZE;

const TILE_UPDATE_DELTA = 500; // every .5 seconds

export default class Terrain {
    constructor() {
        this.tiles = null;
        game.add.tileSprite(0, GROUND_LEVEL, Defs.GAME_WIDTH, Defs.GAME_HEIGHT, 'TILE_UNDERGROUND');
    
        this.createMap(~~(Defs.GAME_WIDTH / TILE_PSIZE) + 1);

        this.tileUpdateTimer = 0;
    }

    createMap(w) {
        if (this.tiles) {
            throw Error("Map already created");
        }

        if (typeof w !== 'number' || w <= 0) {
            throw Error("Invalid map width: " + w);
        }

        this.tiles = [];

        for (var i = 0; i < w; i++) {
            let tile = Defs.TILES.GRASS;
            if (i > 8 && i < 15 && i % 2 == 0) tile = Defs.TILES.PLOT;
            else if (i === 17 || i === 25) tile = Defs.TILES.FENCE;
            else if (i > 17 && i < 25) tile = Defs.TILES.GROUND;
            else if (i === 28 || i === 7) tile = Defs.TILES.COOP_EMPTY;
            else if (i === 3) tile = Defs.TILES.HOUSE;
            else if (i === 5) tile = Defs.TILES.MAILBOX;

            let sprite = game.add.sprite((i + 0.5) * TILE_PSIZE, GROUND_LEVEL);
            sprite.anchor.y = 1; // anchor to ground level
            sprite.anchor.x = 0.5; // anchor at center of tile

            this.tiles[i] = TileFactory.CreateTile(tile, sprite);
        }
    }

    getTile(t) {
        if (typeof t !== 'number' || t < 0 || t >= this.tiles.length) return null;
        return this.tiles[t];
    }

    setTile(t, tile) {
        if (typeof t !== 'number' || t < 0 || t >= this.tiles.length) return;
        this.tiles[t] = TileFactory.CreateTile(tile, this.tiles[t].sprite);
    }

    canInteract(t) {
        let tile = this.getTile(t);
        return (tile? tile.canInteract() : false);
    }

    interact(t) {
        let tile = this.getTile(t);
        if (tile) {
            tile.interact((tile) => { // pass a function to replace the tile
                this.setTile(t, tile);
            });
        }
    }

    update() {
        this.tileUpdateTimer -= game.time.elapsedMS;
        if (this.tileUpdateTimer <= 0) {
            this.tileUpdateTimer = TILE_UPDATE_DELTA;

            for (var i = 0; i < this.tiles.length; i++) {
                this.tiles[i].update();
            }
        }
    }
}