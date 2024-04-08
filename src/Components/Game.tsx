import React, { useEffect } from 'react'
import Phaser from 'phaser'
import config from '../config'
import { GameScene, UIScene } from '../scenes'

function Game() {
    useEffect(() => {
        new Phaser.Game(
            Object.assign(config, {
              scene: [GameScene, UIScene],
            })
          );
    }, []);

    return <div id="game" />;
}

export default Game;