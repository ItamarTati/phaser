import MainScene from '/js/MainScene.js'

const config = {
    width: 512,
    height: 512,
    backgroundColor: '000',
    type: Phaser.AUTO,
    parent: 'game',
    scene: [MainScene],
    scale: {
        zoom: 2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y:0},
        }
    },
    plugins: {
        scene: [{
            plugin: PhaserMatterCollisionPlugin,
            key: 'matterCollision',
            mapping: 'matterCollision'
        }
        ]
    }
}

new Phaser.Game(config)