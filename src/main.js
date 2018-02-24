import game from './game';
import Defs from './defs';
import Terrain from './terrain';
import Player from './player';

let cloudSprite;
let map;
let terrain;
let player;
let interactIndicator;
let interactKey;

export default {
    preload: () => {

    },

    create: () => {
        game.stage.backgroundColor = "#90A0F5";
        
        terrain = new Terrain();
        player = new Player(10, Defs.GAME_HEIGHT - Defs.TILE_SIZE * Defs.PIXEL_SIZE * 2);

        interactIndicator = game.add.sprite(0, Defs.GAME_HEIGHT - Defs.TILE_SIZE * Defs.PIXEL_SIZE * 2 + Defs.PIXEL_SIZE, 'interact_indicator');
        interactIndicator.anchor.y = 1;
        interactIndicator.alpha = 0.5;
        interactIndicator.visible = false;

        interactKey = game.input.keyboard.addKey(Phaser.Keyboard.X);

        game.add.sprite(0, 0, 'test');
        cloudSprite = game.add.tileSprite(0, 50, Defs.GAME_WIDTH, Defs.PIXEL_SPRITES.cloud.length * Defs.PIXEL_SIZE, 'cloud');
        cloudSprite.scale = {x:2, y:2};
    },

    update: () => {
        cloudSprite.tilePosition.x += 0.1;
        cloudSprite.position.y = 50 + Math.sin(cloudSprite.tilePosition.x / 6) * 3;

        player.update();
        terrain.update();

        let tileFacing = player.getFacingTile();
        if (terrain.canInteract(tileFacing)) {
            interactIndicator.visible = true;
            interactIndicator.position.x = tileFacing * Defs.TILE_SIZE * Defs.PIXEL_SIZE;

            if (interactKey.isDown) {
                terrain.interact(tileFacing);
            }
        } else interactIndicator.visible = false;
    }
}