
/**
 * Import Phaser dependencies using `expose-loader`.
 * This makes then available globally and it's something required by Phaser.
 * The order matters since Phaser needs them available before it is imported.
 */

import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import Defs from './defs';

const game = new Phaser.Game(100, 100, Phaser.CANVAS, '', { preload, create, update });

let map;

function preload() {

}

function create() {
	for (const spriteName in Defs.PIXEL_SPRITES) {
		game.create.texture(spriteName, Defs.PIXEL_SPRITES[spriteName], Defs.PIXEL_SIZE, Defs.PIXEL_SIZE);
	}

	game.add.sprite(0, 0, 'ground');
	map = game.add.tilemap(null, Defs.TILE_SIZE * Defs.PIZEL_SIZE, Defs.TILE_SIZE * Defs.PIZEL_SIZE, 10, 10);
	map.addTilesetImage('ground');
}

function update() {

}