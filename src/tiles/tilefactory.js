import Defs from '../defs';

import Tile from './tile';
import Plot from './plot';
import Plant from './plant';
import Coop from './coop';
import Mailbox from './mailbox';

const TileFactory = {
    tiles: {},

    RegisterTile: function (tile, klass) {
        if (tile in this.tiles) {
            throw Error("Tile " + tile + " already registered.");
        }

        this.tiles[tile] = klass;
    },

    CreateTile: function (tile, sprite) {
        if (tile in this.tiles) {
            return new this.tiles[tile](tile, sprite);
        } else {
            return new Tile(tile, sprite);
        }
    }
}

TileFactory.RegisterTile(Defs.TILES.PLOT, Plot);
TileFactory.RegisterTile(Defs.TILES.PLANT, Plant);
TileFactory.RegisterTile(Defs.TILES.COOP_EMPTY, Coop);
TileFactory.RegisterTile(Defs.TILES.COOP, Coop);
TileFactory.RegisterTile(Defs.TILES.MAILBOX, Mailbox);

export default TileFactory;