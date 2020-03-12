import Circle from "./circle";

class Game {
    constructor(canvas, ctx) {
        this.mousePos = { x: 0, y: 0 }
        this.canvas = canvas;
        this.ctx = ctx;
        this.load();
    }

    load() {
        const sound = document.createElement("audio");
        sound.src = "../dist/DearYou.mp3";
        sound.setAttribute("preload", "auto");
        sound.setAttribute("controls", "none");
        document.body.appendChild(sound);
        this.circle = new Circle({ color: "silver", radius: 35, pos: [200, 100], number: 3 }, this.ctx);
        this.recordMousePos();
        this.keyPress();
        this.circle.render(this.ctx);
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