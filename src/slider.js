class Slider {
    constructor(attr, ctx) {
        this.color = attr.color;
        this.radius = attr.radius;
        this.posX = attr.pos[0];
        this.posY = attr.pos[1];
        this.endX = attr.end[0];
        this.endY = attr.end[1];
        this.number = attr.number;
        this.sT = attr.sT;
        this.hT = attr.hT;
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

    findSlope() {
        //finds the slope connecting the start and end center of the two circles
        let dy = this.endY - this.posY;
        let dx = this.endX - this.posX;
        return dy/dx;
    }

    // findIntersectionPoint() {
    //     //finds the intersection point for the line and the circle without offset
    //     let slope = this.findSlope();
    //     let x = (this.radius * slope / Math.sqrt(1 + Math.pow(slope, 2)))
    //     let y = (this.radius * slope / Math.sqrt(1 + Math.pow(slope, 2)))
    //     return [x, y];
    // }

    findCurrentAngle() {
        //returns current angle based on slope
        let angle = Math.atan(this.findSlope());
        return angle;
    }
    
    findConnectionPoints() {
        let currentAngle = this.findCurrentAngle();
        let firstAngle = currentAngle + Math.PI/2; //rotate clockwise 90 deg
        let secondAngle = currentAngle - Math.PI/2; //rotate counterclockwise 90 deg
        
        let firstStartX = this.posX + this.radius * Math.cos(firstAngle);
        let firstStartY = this.posY + this.radius * Math.sin(firstAngle);
        let firstEndX = this.endX + this.radius * Math.cos(firstAngle);
        let firstEndY = this.endY + this.radius * Math.sin(firstAngle);
        
        let secondStartX = this.posX + this.radius * Math.cos(secondAngle);
        let secondStartY = this.posY + this.radius * Math.sin(secondAngle);
        let secondEndX = this.endX + this.radius * Math.cos(secondAngle);
        let secondEndY = this.endY + this.radius * Math.sin(secondAngle);

        return {
            firstStartPos: [firstStartX, firstStartY],
            firstEndPos: [firstEndX, firstEndY],
            secondStartPos: [secondStartX, secondStartY],
            secondEndPos: [secondEndX, secondEndY]
        };
    }

    drawTwoCircles(ctx) {
        //inner circle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        //outline circle
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();

        //number inside circle
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.textBaseline = "middle";
        ctx.fillText(this.number, this.posX - 8, this.posY);

        //2nd inner circle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.endX, this.endY, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        //2nd outline circle
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.endX, this.endY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();

    }

    drawSliderLines(ctx) {
        const pt = this.findConnectionPoints();
        ctx.strokeStyle="white";
        ctx.beginPath();
        ctx.moveTo(pt.firstStartPos[0], pt.firstStartPos[1]);
        ctx.lineTo(pt.firstEndPos[0], pt.firstEndPos[1]);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(pt.secondStartPos[0], pt.secondStartPos[1]);
        ctx.lineTo(pt.secondEndPos[0], pt.secondEndPos[1]);
        ctx.stroke();
    }


    render() {
        
        const ctx = this.ctx;
        this.drawSliderLines(ctx);

        this.drawTwoCircles(ctx);
        

        

       

       


        

        //shrinking outer circle
        if (this.currentTime) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = "rgba(102, 95, 95, 0.404)";
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, this.radius * (2.5 * (this.hT - this.currentTime) + .95), 0, 2 * Math.PI)
            ctx.stroke();
        }
    }

    clear(ctx) {
        console.log("hit!")
    }

}

export default Slider;