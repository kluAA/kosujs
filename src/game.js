import Circle from "./circle";
import { DearYou } from "./beatmap";

class Game {
    constructor(canvas, ctx) {
        this.mousePos = { x: 0, y: 0 }
        this.canvas = canvas;
        this.ctx = ctx;
        this.beatmap = DearYou;
        this.load();
    }

    load() {
        this.initializeSound();
        this.circle = new Circle({ color: "silver", radius: 35, pos: [200, 100], number: 3 }, this.ctx);
        this.recordMousePos();
        this.keyPress();
        this.play();
        this.circle.render(this.ctx);
    }

    play() {
        let playBtn = document.getElementById("play");
        playBtn.addEventListener("click", e => {
            this.sound.volume = 0.5;
            this.sound.play();
        })
    }

    initializeSound() {
        this.sound = document.createElement("audio");
        this.sound.src = DearYou.src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }   

    recordMousePos() {
        this.canvas.onmousemove = e => {
            this.mousePos.x = e.pageX;
            this.mousePos.y = e.pageY;
        };
    }

    keyPress() {
        this.canvas.onkeydown = e => {
            let pt = this.getMouse(this.canvas);
            if (this.circle.isInside(pt.x, pt.y)) this.circle.clear();
        }
    }

    getMouse() {
        let element = this.canvas,
            offsetX = 0,
            offsetY = 0,
            mx, my;

        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }

        mx = this.mousePos.x - offsetX;
        my = this.mousePos.y - offsetY;
        console.log(mx, my);

        return {
            x: mx,
            y: my

        };
    }

}

export default Game;