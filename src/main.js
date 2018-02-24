import game from './game';
import State from './state';
import Defs from './defs';
import Terrain from './terrain';
import Player from './player';

const INTERACT_DELAY = 200;

let cloudSprite;
let map;
let terrain;
let player;

let coinSprite;
let coinText;

let interactIndicator;
let interactKey;
let interactTimer = 0;

export default {
    preload: () => {

    },

    create: () => {
        State.reset();
        
        game.stage.backgroundColor = "#90A0F5";
        cloudSprite = game.add.tileSprite(0, 50, Defs.GAME_WIDTH, Defs.PIXEL_SPRITES.cloud.length * Defs.PIXEL_SIZE, 'cloud');
        cloudSprite.scale = {x:2, y:2};

        terrain = new Terrain();
        player = new Player(10, Defs.GAME_HEIGHT - Defs.TILE_SIZE * Defs.PIXEL_SIZE * 2);

        interactIndicator = game.add.sprite(0, Defs.GAME_HEIGHT - Defs.TILE_SIZE * Defs.PIXEL_SIZE * 2 + Defs.PIXEL_SIZE, 'interact_indicator');
        interactIndicator.anchor.y = 1;
        interactIndicator.alpha = 0.5;
        interactIndicator.visible = false;

        interactKey = game.input.keyboard.addKey(Phaser.Keyboard.X);

        coinSprite = game.add.sprite(15, Defs.GAME_HEIGHT - 15, 'coin_big');
        coinSprite.anchor.y = 1;

        coinText = game.add.text(54, Defs.GAME_HEIGHT - 8, State.coins, {
            "font": "Courier New",
            fill: "#FFF",
            fontSize: "32px",
            fontWeight: "bold"
        });
        coinText.anchor.y = 1;

        game.add.sprite(0, 0, 'test');
    },

    update: () => {
        cloudSprite.tilePosition.x += 0.1;
        cloudSprite.position.y = 50 + Math.sin(cloudSprite.tilePosition.x / 6) * 3;

        coinText.text = State.coins;

        player.update();
        terrain.update();

        let tileFacing = player.getFacingTile();
        if (terrain.canInteract(tileFacing)) {
            interactIndicator.visible = true;
            interactIndicator.position.x = tileFacing * Defs.TILE_SIZE * Defs.PIXEL_SIZE;

            if (interactKey.isDown && interactTimer <= 0) {
                terrain.interact(tileFacing);
                interactTimer = INTERACT_DELAY;
            }
        } else interactIndicator.visible = false;

        if (interactTimer > 0) interactTimer -= game.time.elapsedMS;
    }
}