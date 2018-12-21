import {Component, AfterViewInit} from "@angular/core";
import "./TemplateData/style.css";

import {UnityProgress} from "./TemplateData/UnityProgress.js";
import {UnityLoader} from "./Build/UnityLoader.js";

@Component({selector: "app-game", templateUrl: "./game.component.html", styleUrls: ["./game.component.css"]})
export class GameComponent implements AfterViewInit {
    private gameInstance : any;

    private gameObj = UnityLoader;

    constructor() {}

    ngAfterViewInit() {
        this.gameInstance = UnityLoader
            .instantiate("gameContainer", "./Build/New folder.json", {onProgress: UnityProgress});
    }
}
