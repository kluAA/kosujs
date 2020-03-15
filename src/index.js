import Game from "./game"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = 1000;
    canvas.height = 580;
    canvas.style.backgroundColor = "black";
    // canvas.style.border = "5px solid lightgrey";
    canvas.setAttribute('tabindex', 0);
    canvas.focus();
    const ctx = canvas.getContext("2d");
    
    new Game(canvas, ctx);
})


// const sound = document.createElement("audio");
//     sound.src = "../dist/DearYou.mp3";
//     sound.setAttribute("preload", "auto");
//     sound.setAttribute("controls", "none");
//     // sound.style.display = "none";
//     document.body.appendChild(sound);

//     let mousePos = { x: 0, y: 0 }
//     canvas.onmousemove = e => {
//         mousePos.x = e.pageX;
//         mousePos.y = e.pageY;
//     };

// function getMouse(canvas) {
//         let element = canvas,
//             offsetX = 0,
//             offsetY = 0,
//             mx, my;

//         if (element.offsetParent !== undefined) {
//             do {
//                 offsetX += element.offsetLeft;
//                 offsetY += element.offsetTop;
//             } while ((element = element.offsetParent));
//         }

//         mx = mousePos.x - offsetX;
//         my = mousePos.y - offsetY;
//         console.log(mx, my);

//         return {
//             x: mx,
//             y: my

//         };
//     }

//     const circle = new Circle({color: "silver", radius: 35, pos: [200, 100], number: 3}, ctx)

//     canvas.onkeydown = e => {
//         console.log("key!")
//         var pt = getMouse(canvas);
//         if (circle.isInside(pt.x, pt.y)) circle.clear();

//     }
//     circle.render(ctx);