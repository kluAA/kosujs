import Circle from "./circle";
import { DearYou, Gurenge } from "./beatmap";
import Slider from "./slider";

const GREAT_WINDOW = 0.2;
const NORMAL_WINDOW = 0.4
const OK_WINDOW = 0.55

class Game {
    constructor(canvas, ctx) {
        this.mousePos = { x: 0, y: 0 }
        this.canvas = canvas;
        this.ctx = ctx;
        this.beatmap = Gurenge;
        this.objects = []
        this.time = 0;
        this.combo = 1;
        this.keyDown = false;
        this.keyUp = true;
        this.score = 0;
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
        this.beatmap.data.forEach(beat => {
            if (beat.slider) {
                this.objects.push(new Slider({
                    color: beat.color,
                    radius: 35,
                    pos: beat.pos,
                    end: beat.end,
                    number: beat.num,
                    sT: beat.sT,
                    hT: beat.hT,
                    eT: beat.eT
                }, this.ctx))
            } else {
                this.objects.push(new Circle({
                    color: beat.color,
                    radius: 35,
                    pos: beat.pos,
                    number: beat.num,
                    sT: beat.sT,
                    hT: beat.hT,
                },this.ctx))
            }
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
            this.objects.forEach(obj => {
              
                if ((this.sound.currentTime >= obj.sT) && (obj.eT <= this.sound.currentTime)) {
                    this.handleClear();
                }
                else if (obj.sT <= this.sound.currentTime) {
                    obj.setCurrentTime(this.sound.currentTime);
                    obj.render();
                } 

            })
            // let slider = new Slider({ pos: [200, 100], end: [400, 300], number: 1, sT: 2, hT: 5, eT: 8, color: "rgba(102, 95, 95, 0.404)", radius: 35}, this.ctx)
            // slider.setCurrentTime(this.sound.currentTime)
            // slider.render();
            // this.circles[0].render();
            this.renderScore();
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
            
            if (this.objects[0] instanceof Circle) {
                let inside = this.objects[0].isInside(pt.x, pt.y);
                if (inside && this.keyUp) {
        
                    if (this.objects[0].hT - GREAT_WINDOW <= this.sound.currentTime) {
                        this.handleClear(true, 300);
                    } else if (this.objects[0].hT - NORMAL_WINDOW <= this.sound.currentTime) {
                        this.handleClear(true, 100);
                    } else if (this.objects[0].hT - OK_WINDOW <= this.sound.currentTime) {
                        this.handleClear(true, 50);
                    } else {
                        this.handleClear();
                    }

                }

            } else if (this.objects[0] instanceof Slider) {
                console.log("SLIDER")
            }

          
            this.keyUp = false;
           
        }
    }

    incrementScore(value) {
        this.score += value * this.combo;
    }

    renderScore() {
        this.ctx.font = "bold 30px Arial";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "end";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.score, 980, 20)
        this.ctx.textAlign = "start";
    }

    handleKeyUp() {
        this.canvas.onkeyup = e => {
            this.keyDown = false;
            this.keyUp = true;
        }
    }

    handleClear(hit, score) {
        if (hit) {
            this.hitSound = document.createElement("audio");
            this.hitSound.src = "../dist/hit3.wav";
            this.hitSound.setAttribute("preload", "auto");
            this.hitSound.setAttribute("controls", "none");
            this.hitSound.volume = 0.2;
            this.hitSound.style.display = "none";
            document.body.appendChild(this.hitSound);
            this.hitSound.play();
            this.incrementScore(score);
            this.objects.shift();
        } else { //miss
            this.objects.shift();
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