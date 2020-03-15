import Circle from "./circle";
import { DearYou, Gurenge } from "./beatmap";
import Slider from "./slider";

class Game {
    constructor(canvas, ctx) {
        this.mousePos = { x: 0, y: 0 }
        this.canvas = canvas;
        this.ctx = ctx;
        this.beatmap = Gurenge;
        this.circles = []
        this.time = 0;
        this.keyDown = false;
        this.keyUp = true;
        this.load();
    }

    load() {
        this.initializeSound();
        this.recordMousePos();
        this.handleKeyDown();
        this.handleKeyUp();
        this.play();
    }

    loadCircles() {
        this.beatmap.data.forEach(circle => {
            this.circles.push(new Circle({
                color: "rgba(102, 95, 95, 0.404)",
                radius: 35,
                pos: circle.pos,
                number: circle.num,
                sT: circle.sT,
                hT: circle.hT,
            },this.ctx))
        })
    }

    play() {
        let playBtn = document.getElementById("play");
        playBtn.addEventListener("click", e => {
            e.preventDefault();
            this.sound.volume = 0.1;
            this.sound.play();
            this.canvas.focus();
            this.loadCircles();
            this.animate();
        })
    }

    animate(time) {
        // console.log(this.time);
        if (this.sound.currentTime < this.sound.duration) {
            this.ctx.clearRect(0, 0, 1000, 580)
            // this.circles.forEach((circle, i) => {
              
            //     if ((this.sound.currentTime >= circle.sT) && (circle.hT <= this.sound.currentTime)) {
            //         this.handleClear();
              
            //     }
            //     else if (circle.sT <= this.sound.currentTime) {
            //         circle.setCurrentTime(this.sound.currentTime);
            //         circle.render();
            //     } 

            // })
            let slider = new Slider({ pos: [200, 100], end: [400, 300], number: 1, sT: 2, hT: 5, eT: 8, color: "rgba(102, 95, 95, 0.404)", radius: 35}, this.ctx)
            slider.setCurrentTime(this.sound.currentTime)
            slider.render();
            // this.circles[0].render();
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    initializeSound() {
        this.sound = document.createElement("audio");
        this.sound.src = Gurenge.src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);

        this.hitSound = document.createElement("audio");
        this.hitSound.src = "../dist/hit.wav";
        this.hitSound.setAttribute("preload", "auto");
        this.hitSound.setAttribute("controls", "none");
        this.hitSound.volume = 0.2;
        this.hitSound.style.display = "none";
        document.body.appendChild(this.hitSound);
    }   

    recordMousePos() {
        this.canvas.onmousemove = e => {
            this.mousePos.x = e.pageX;
            this.mousePos.y = e.pageY;
        };
    }

    handleKeyDown() {
        this.canvas.onkeydown = e => {
            this.keyDown = true;
            if (!this.keyUp) return;
            // if (!this.circles[0]) return;
            let pt = this.getMouse(this.canvas);
            if (this.circles[0].isInside(pt.x, pt.y) && this.keyUp) {
                this.handleClear("hit");
            }
            this.keyUp = false;
            console.log(this.keyDown, this.keyUp)
        }
    }

    handleKeyUp() {
        this.canvas.onkeyup = e => {
            this.keyDown = false;
            this.keyUp = true;
            console.log(this.keyDown, this.keyUp);
        }
    }

    handleClear(hit) {
        if (hit) {
            this.hitSound = document.createElement("audio");
            this.hitSound.src = "../dist/hit3.wav";
            this.hitSound.setAttribute("preload", "auto");
            this.hitSound.setAttribute("controls", "none");
            this.hitSound.volume = 0.2;
            this.hitSound.style.display = "none";
            document.body.appendChild(this.hitSound);
            this.hitSound.play();
        }
        this.circles.shift();
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