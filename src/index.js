import * as PIXI from "pixi.js-legacy";
import { PixiConsole, PixiConsoleConfig } from "pixi-console";
import rabbitImage from "./assets/rabbit.png";
import wormImage from "./assets/worm.png";
import cookieImage from "./assets/cookie.png";
import horseImage from "./assets/trojan_horse.png";
export class Main {
    constructor() {
        window.onload = () => {
            this.startLoadingAssets();
        };
    }
    startLoadingAssets() {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", rabbitImage);
        loader.add("worm", wormImage);
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
        this.makeEnemies();
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
        // console.warn("Warnings example ✌");
        // setTimeout(() => {
        //     throw new Error("Uncaught error example 👮‍♀️");
        // }, 0);
    }

    makeEnemies() {
        let numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150,
        speed = 2,
        direction = 1;

        //Make as many blobs as there are `numberOfBlobs`
        for (let i = 0; i < numberOfBlobs; i++) {

        let bunny = new PIXI.Sprite(PIXI.Texture.from("worm"));
        let x = spacing * i + xOffset;
        let y = Math.random() * (this.app.stage.height - bunny.height);

        bunny.x = x;
        bunny.y = y;
        bunny.position.set(bunny.x, bunny.y);
        // bunny.scale.set(2, 2);
        this.app.stage.addChild(bunny);

        // //Make a blob
        // let blob = new Sprite(id["./assets/worm.png"]);

        // //Space each blob horizontally according to the `spacing` value.
        // //`xOffset` determines the point from the left of the screen
        // //at which the first blob should be added
        // let x = spacing * i + xOffset;

        // //Give the blob a random `y` position
        // let y = randomInt(0, stage.height - blob.height);

        // //Set the blob's position
        // blob.x = x;
        // blob.y = y;

        // //Set the blob's vertical velocity. `direction` will be either `1` or
        // //`-1`. `1` means the enemy will move down and `-1` means the blob will
        //  //move up. Multiplying `direction` by `speed` determines the blob's
        // //vertical direction
        // blob.vy = speed * direction;

        // //Reverse the direction for the next blob
        // direction *= -1;

        //Push the blob into the `blobs` array
        // blobs.push(blob);

        //Add the blob to the `gameScene`
        // stage.addChild(blob);
    
        }
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
