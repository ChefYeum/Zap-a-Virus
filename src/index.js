import * as PIXI from "pixi.js-legacy";
import { PixiConsole, PixiConsoleConfig } from "pixi-console";
import rabbitImage from "./assets/rabbit.png";
export class Main {
    constructor() {
        window.onload = () => {
            this.startLoadingAssets();
        };
    }
    startLoadingAssets() {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", rabbitImage);
        loader.on("complete", () => {
            this.onAssetsLoaded();
        });
        loader.load();
    }
    onAssetsLoaded() {
        this.createRenderer();
        this.attachPixiConsole();
        const stage = this.app.stage;
        const bunny = this.getBunny();
        bunny.position.set(Main.GAME_WIDTH / 2, Main.GAME_HEIGHT / 2);
        stage.addChild(bunny);
        this.app.ticker.add(() => {
            bunny.rotation += 0.05;
        });
    }
    createRenderer() {
        this.app = new PIXI.Application({
            backgroundColor: 0xd3d3d3,
            width: Main.GAME_WIDTH,
            height: Main.GAME_HEIGHT,
        });
        document.body.appendChild(this.app.view);
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.app.stage.scale.x = window.innerWidth / Main.GAME_WIDTH;
        this.app.stage.scale.y = window.innerHeight / Main.GAME_HEIGHT;
        window.addEventListener("resize", this.onResize.bind(this));
    }
    attachPixiConsole() {
        const consoleConfig = new PixiConsoleConfig();
        consoleConfig.consoleWidth = this.app.view.width;
        consoleConfig.consoleHeight = this.app.view.height;
        consoleConfig.backgroundAlpha = 0;
        const pixiConsole = new PixiConsole(consoleConfig);
        pixiConsole.show();
        this.app.stage.addChild(pixiConsole);
        console.log("Pixi-console added 🦾");
        console.warn("Warnings example ✌");
        setTimeout(() => {
            throw new Error("Uncaught error example 👮‍♀️");
        }, 0);
    }
    getBunny() {
        const bunnyRotationPoint = {
            x: 0.5,
            y: 0.5,
        };
        const bunny = new PIXI.Sprite(PIXI.Texture.from("rabbit"));
        bunny.anchor.set(bunnyRotationPoint.x, bunnyRotationPoint.y);
        bunny.scale.set(2, 2);
        return bunny;
    }
    onResize() {
        if (!this.app) {
            return;
        }
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.app.stage.scale.x = window.innerWidth / Main.GAME_WIDTH;
        this.app.stage.scale.y = window.innerHeight / Main.GAME_HEIGHT;
    }
}
Main.GAME_WIDTH = 800;
Main.GAME_HEIGHT = 600;
new Main();
