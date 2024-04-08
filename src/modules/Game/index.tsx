import { useEffect } from "react"
import config from "../../game/config";
import { GameScene, UIScene } from "../../game/scenes";
import React from "react";

export const Game = () => {
    useEffect(() => {
        new Phaser.Game(
            Object.assign(config, {
                scene: [GameScene, UIScene],
            })
             );
    }, []);
    
    return <div id="game" style={{ position: 'absolute', top: 0 }} />;
}