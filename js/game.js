import MainScene from '/js/MainScene.js'
const height = 512
const width = 512
const config = {
    width: width,
    height: height,
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