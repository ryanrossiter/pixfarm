import game from './game';

const SPEED = 2;

export default class Player {
    constructor(x, y) {
        this.sprite = game.add.sprite(x, y, 'smile');
        this.sprite.anchor.y = 1;
        this.cursorKeys = game.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursorKeys.left.isDown) {
            this.sprite.position.x -= SPEED;
        }

        if (this.cursorKeys.right.isDown) {
            this.sprite.position.x += SPEED;
        }
    }
}