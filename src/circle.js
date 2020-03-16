class Circle {
    constructor(attr, ctx) {
        this.color = attr.color;
        this.radius = attr.radius;
        this.posX = attr.pos[0];
        this.posY = attr.pos[1];
        this.number = attr.number;
        this.sT = attr.sT;
        this.hT = attr.hT;
        this.eT = this.hT;
        this.currentTime = null;
        this.ctx = ctx;
    }

    isInside(x, y) {
        let dx = this.posX - x;
        let dy = this.posY - y;
        return (Math.pow(dx, 2) + Math.pow(dy, 2)) <= this.radius * this.radius;
    }
    
    setCurrentTime(time) {
        this.currentTime = time;
    }

    render() {
        const ctx = this.ctx;
        //inner circle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
       
        //outline circle
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        //number inside circle
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.textBaseline = "middle";
        ctx.fillText(this.number, this.posX-8, this.posY);
        //shrinking outer circle
        if (this.currentTime >= this.sT && this.currentTime <= this.hT) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, this.radius * (2.5 * (this.hT - this.currentTime) + .95), 0, 2 * Math.PI)
            ctx.stroke();
        }
    }

    clear(ctx) {
        console.log("hit!")
    }

}

export default Circle;