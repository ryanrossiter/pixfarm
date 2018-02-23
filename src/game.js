
/**
 * Import Phaser dependencies using `expose-loader`.
 * This makes then available globally and it's something required by Phaser.
 * The order matters since Phaser needs them available before it is imported.
 */

import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import Defs from './defs';
import Terrain from './terrain';
import Player from './player';

const game = new Phaser.Game(Defs.GAME_WIDTH, Defs.GAME_HEIGHT, Phaser.CANVAS, 'phaser-parent', { preload, create, update });

let map;
let terrain;
let player;

function preload() {

}

function create() {
    game.stage.backgroundColor = "#90A0F5";

    for (const spriteName in Defs.PIXEL_SPRITES) {
        game.create.texture(spriteName, Defs.PIXEL_SPRITES[spriteName], Defs.PIXEL_SIZE, Defs.PIXEL_SIZE);
    }

    terrain = new Terrain();
    player = new Player(10, Defs.GAME_HEIGHT - Defs.TILE_SIZE * Defs.PIXEL_SIZE * 2);
}

function update() {
    player.update();
}

export default game;