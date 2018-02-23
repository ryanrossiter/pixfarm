import game from './game';
import Defs from './defs';

const SPEED = 2;

export default class Player {
    constructor(x, y) {
        this.sprite = game.add.sprite(x, y, 'player-spritesheet');
        this.sprite.animations.add("walk");
        this.sprite.anchor.y = 1;
        this.sprite.anchor.x = 0.5;

        this.cursorKeys = game.input.keyboard.createCursorKeys();
        this.moving = false;
        this.dir = true;
    }

    update() {
        let moving = false;

        if (this.cursorKeys.left.isDown) {
            this.sprite.position.x -= SPEED;
            moving = !moving;
            this.dir = false;
        }

        if (this.cursorKeys.right.isDown) {
            this.sprite.position.x += SPEED;
            this.sprite.scale.x = 1;
            moving = !moving; // so if l+r are pressed moving = false
            this.dir = true;
        }

        this.sprite.scale.x = (this.dir? 1 : -1);

        if (moving != this.moving) {
            this.moving = moving;
            if (moving) {
                this.sprite.animations.play('walk', 3, true);
                this.sprite.animations.currentAnim.setFrame(1);
            } else {
                this.sprite.animations.stop();
                this.sprite.animations.frame = 0;
            }
        } 
    }

    getFacingTile() {
        return ~~(this.sprite.position.x / (Defs.TILE_SIZE * Defs.PIXEL_SIZE)) + (this.dir? 1 : -1);
    }
}