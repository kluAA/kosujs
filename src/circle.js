class Circle {
    constructor(attr, ctx) {
        this.color = attr.color;
        this.radius = attr.radius;
        this.posX = attr.pos[0];
        this.posY = attr.pos[1];
        this.number = attr.number;
        this.sT = attr.sT;
        this.hT = attr.hT;
        this.ctx = ctx;
    }

    isInside(x, y) {
        let dx = this.posX - x;
        let dy = this.posY - y;
        return (Math.pow(dx, 2) + Math.pow(dy, 2)) <= this.radius * this.radius;
    }
    
    render() {
        const ctx = this.ctx;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.textBaseline = "middle";
        ctx.fillText(this.number, this.posX-8, this.posY);
    }

    clear(ctx) {
        console.log("hit!")
    }

}

export default Circle;