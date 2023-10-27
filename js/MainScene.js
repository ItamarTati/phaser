export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        console.log('preload')
        this.load.spritesheet('spritesheet_key', '/assets/images/Samurai/SpriteSheet.png', {
            frameWidth: 32,
            frameHeight: 42
        });
    }

    create() {
        console.log('create')
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);
        this.inputKeys = this.input.keyboard.addKeys(({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        }))
        // Create an animation for the sprite
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('spritesheet_key', { start: 0, end: 3 }), // Replace with the appropriate frame numbers
            frameRate: 10,
            repeat: -1
        });

        // Create the player sprite using the sprite sheet
        this.player = this.physics.add.sprite(x, y, 'spritesheet_key', frameNumber); // Replace 'x', 'y', and 'frameNumber' with actual values
        this.player.play('walk'); // Start the animation
    }

    update() {
        console.log('update')
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown) {
            playerVelocity.x = -1
        }
        else if(this.inputKeys.right.isDown) {
            playerVelocity.x = 1
        }
        if(this.inputKeys.up.isDown) {
            playerVelocity.y = -1
        }
        else if(this.inputKeys.down.isDown) {
            playerVelocity.y = 1
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.player.setVelocity(playerVelocity.x, playerVelocity.y)
    }
}