import Circle from "./circle";
import { DearYou, Gurenge } from "./beatmap";
import Slider from "./slider";

const GREAT_WINDOW = 0.2;
const NORMAL_WINDOW = 0.4;
const OK_WINDOW = 0.5

class Game {
    constructor(canvas, ctx) {
        this.mousePos = { x: 0, y: 0 }
        this.canvas = canvas;
        this.ctx = ctx;
        this.beatmap = Gurenge;
        this.objects = []
        this.combo = 1;
        this.keyDown = false;
        this.keyUp = true;
        this.score = 0;
        this.load();
    }

    load() {
        this.combo = 1;
        this.score = 0;
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
            this.sound.volume = 0.7;
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
                    let pt = this.getMouse();
                    if (obj instanceof Slider && obj.isInside(pt.x, pt.y)) {
                        this.handleClear(true, 300);
                        this.incrementCombo();
                    } else {
                        this.handleClear();
                    }
                }
                else if (obj.sT <= this.sound.currentTime) {
                    obj.setCurrentTime(this.sound.currentTime);
                    obj.render();
                } 

            })
    
            this.renderScore();
            this.renderCombo();
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
            let pt = this.getMouse();
            console.log(`{ pos: [${pt.x}, ${pt.y}], num: , sT: , hT: ${this.sound.currentTime}, color: },`);

            
            if (this.objects[0] instanceof Circle) {
                let inside = this.objects[0].isInside(pt.x, pt.y);
                if (inside && this.keyUp) {
        
                    if (this.objects[0].hT - GREAT_WINDOW <= this.sound.currentTime) {
                        this.incrementCombo();
                        this.handleClear(true, 300);
                    } else if (this.objects[0].hT - NORMAL_WINDOW <= this.sound.currentTime) {
                        this.resetCombo();
                        this.handleClear(true, 100);
                    } else if (this.objects[0].hT - OK_WINDOW <= this.sound.currentTime) {
                        this.resetCombo();
                        this.handleClear(true, 50);
                    } else {
                        this.resetCombo();
                        this.handleClear();
                    }
                }

            } else if (this.objects[0] instanceof Slider) {
                let inside = this.objects[0].isInside(pt.x, pt.y);
                if (inside && this.keyUp && this.sound.currentTime <= this.objects[0].hT + 0.10) {

                    if ((this.objects[0].hT - GREAT_WINDOW <= this.sound.currentTime) || this.sound.currentTime <= (this.objects[0].hT + 0.10)) {
                        this.incrementCombo();
                        this.incrementScore(300);
                        this.playHit();
                    } else if (this.objects[0].hT - NORMAL_WINDOW <= this.sound.currentTime) {
                        this.resetCombo();
                        this.incrementScore(100);
                        this.playHit();
                    } else if (this.objects[0].hT - OK_WINDOW <= this.sound.currentTime) {
                        this.resetCombo();
                        this.playHit();
                    } else {
                        this.resetCombo();
                    }
                }
            }

          
            this.keyUp = false;
           
        }
    }

    incrementScore(value) {
        this.score += value * this.combo;
    }

    incrementCombo() {
        this.combo += 1;
    }

    resetCombo() {
        if (this.combo >= 5) {
            this.playComboBreak();
            this.combo = 1;
        } else {
            this.combo = 1;
        }
    }

    renderScore() {
        this.ctx.font = "bold 30px Arial";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "end";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.score, 980, 20);
        this.ctx.textAlign = "start";
    }

    renderCombo() {
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`${this.combo}x`, 10, 560);
        
    }

    handleKeyUp() {
        this.canvas.onkeyup = e => {
            this.keyDown = false;
            this.keyUp = true;
        }
    }

    handleClear(hit, score) {
        if (hit) {
            this.playHit();
            this.incrementScore(score);
            this.objects.shift();
        } else { //miss
            this.resetCombo();
            this.objects.shift();
        }
    }

    playHit() {
        this.hitSound = document.createElement("audio");
        this.hitSound.src = "./dist/hit3.wav";
        this.hitSound.setAttribute("preload", "auto");
        this.hitSound.setAttribute("controls", "none");
        this.hitSound.volume = 0.5;
        this.hitSound.style.display = "none";
        document.body.appendChild(this.hitSound);
        this.hitSound.play();
        
    }

    playComboBreak() {
        this.comboBreak = document.createElement("audio");
        this.comboBreak.src = "./dist/combobreak.mp3";
        this.comboBreak.setAttribute("preload", "auto");
        this.hitSound.setAttribute("controls", "none");
        this.comboBreak.style.display = "none";
        document.body.appendChild(this.comboBreak);
        this.comboBreak.play();
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

        return {
            x: mx,
            y: my

        };
    }

}

export default Game;