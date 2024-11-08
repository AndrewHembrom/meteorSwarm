import Phaser from 'phaser'
import LoaderScene from './scenes/LoaderScene'
import MainMenuScene from './scenes/MainMenuScene'
import PlayScene from './scenes/PlayScene'
import GameOverScene from './scenes/GameOverScene'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    scene: [
        LoaderScene,
        MainMenuScene,
        PlayScene,
        GameOverScene
    ],
//    backgroundColor: '#6495ed'
}

const game = new Phaser.Game(config)
