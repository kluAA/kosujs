!function(s){var t={};function o(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return s[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=s,o.c=t,o.d=function(s,t,e){o.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:e})},o.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,t){if(1&t&&(s=o(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var i in s)o.d(e,i,function(t){return s[t]}.bind(null,i));return e},o.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(t,"a",t),t},o.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},o.p="",o(o.s=0)}([function(s,t,o){"use strict";o.r(t);var e=class{constructor(s,t){this.color=s.color,this.radius=s.radius,this.posX=s.pos[0],this.posY=s.pos[1],this.number=s.number,this.sT=s.sT,this.hT=s.hT,this.eT=this.hT,this.currentTime=null,this.ctx=t}isInside(s,t){let o=this.posX-s,e=this.posY-t;return Math.pow(o,2)+Math.pow(e,2)<=this.radius*this.radius}setCurrentTime(s){this.currentTime=s}render(){const s=this.ctx;s.fillStyle=this.color,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.fill(),s.strokeStyle="white",s.lineWidth=3,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.stroke(),s.fillStyle="white",s.font="30px Arial",s.textBaseline="middle",s.fillText(this.number,this.posX-8,this.posY),this.currentTime>=this.sT&&this.currentTime<=this.hT&&(s.lineWidth=5,s.strokeStyle=this.color,s.beginPath(),s.arc(this.posX,this.posY,this.radius*(2.5*(this.hT-this.currentTime)+.95),0,2*Math.PI),s.stroke())}clear(s){console.log("hit!")}};const i="rgba(102, 95, 95, 0.404)",h="rgba(194, 4, 4, 0.479)",n="rgba(4, 17, 194, 0.479)",r={src:"./dist/gurenge.mp3",name:"Kimetsu no Yaiba OP Gurenge",author:"LiSa",data:[{pos:[343,318],num:1,sT:0,hT:.902254,color:i},{pos:[454,225],num:2,sT:0,hT:1.315567,color:i},{pos:[631,377],num:3,sT:0,hT:1.755185,color:i},{pos:[328,357],num:4,sT:1.8,hT:2.780242,color:i},{pos:[418,222],num:5,sT:1.8,hT:3.131158,color:i},{pos:[614,367],num:6,sT:1.8,hT:3.528053,color:i},{pos:[265,329],end:[599,106],num:1,sT:3.5,hT:4.336665,eT:6.3534,color:h,slider:!0},{pos:[330,200],num:2,sT:5,hT:7.626148,color:h},{pos:[537,190],num:3,sT:5.5,hT:8.033662,color:h},{pos:[537,367],num:4,sT:6,hT:8.407987,color:h},{pos:[332,266],num:1,sT:8,hT:9.315299,color:n},{pos:[448,268],num:2,sT:8,hT:9.650101,color:n},{pos:[569,267],num:3,sT:8,hT:9.993618,color:n},{pos:[637,354],num:4,sT:9.5,hT:11.012805,color:n},{pos:[500,362],num:5,sT:9.5,hT:11.323041,color:n},{pos:[300,380],end:[300,260],num:1,sT:10.5,hT:11.9222,eT:12.4105,color:i,slider:!0},{pos:[380,260],end:[380,380],num:2,sT:11.4,hT:12.7,eT:13.1,color:i,slider:!0},{pos:[460,380],end:[460,260],num:3,sT:12.2,hT:13.4,eT:13.8,color:i,slider:!0},{pos:[540,260],end:[540,380],num:4,sT:13,hT:14.1,eT:14.5,color:i,slider:!0},{pos:[620,380],end:[620,260],num:5,sT:13.8,hT:14.8,eT:15.2,color:i,slider:!0},{pos:[540,260],end:[540,380],num:1,sT:14.6,hT:15.5,eT:15.9,color:h,slider:!0},{pos:[460,380],end:[460,260],num:2,sT:15.4,hT:16.2,eT:16.6,color:h,slider:!0},{pos:[380,260],end:[380,380],num:3,sT:16.2,hT:16.9,eT:17.3,color:h,slider:!0},{pos:[300,380],end:[300,260],num:4,sT:17,hT:17.6,eT:18,color:h,slider:!0},{pos:[300,245],num:5,sT:17,hT:18.2,color:h},{pos:[260,250],num:1,sT:17.8,hT:18.7,color:i},{pos:[295,250],num:2,sT:17.8,hT:19,color:i},{pos:[330,250],num:3,sT:17.8,hT:19.3,color:i},{pos:[365,250],num:4,sT:17.8,hT:19.6,color:i},{pos:[260,320],num:1,sT:18.8,hT:19.9,color:h},{pos:[295,320],num:2,sT:18.8,hT:20.2,color:h},{pos:[330,320],num:3,sT:18.8,hT:20.5,color:h},{pos:[365,320],num:4,sT:18.8,hT:20.8,color:h},{pos:[260,390],num:1,sT:19.8,hT:21.1,color:n},{pos:[295,390],num:2,sT:19.8,hT:21.4,color:n},{pos:[330,390],num:3,sT:19.8,hT:21.7,color:n},{pos:[365,390],num:4,sT:19.8,hT:22,color:n},{pos:[330,354],num:1,sT:21.5,hT:22.5,color:i},{pos:[682,304],num:2,sT:22,hT:23,color:i},{pos:[437,181],num:3,sT:22.5,hT:23.5,color:i},{pos:[302,240],num:4,sT:23,hT:24,color:i},{pos:[302,119],num:1,sT:23.5,hT:24.5,color:h},{pos:[643,131],num:2,sT:24,hT:25,color:h},{pos:[702,457],num:3,sT:24.5,hT:25.5,color:h},{pos:[400,489],num:4,sT:25,hT:26,color:h},{pos:[136,365],num:1,sT:25.5,hT:26.5,color:n},{pos:[179,224],num:2,sT:26,hT:27,color:n},{pos:[430,315],num:3,sT:26.5,hT:27.5,color:n},{pos:[555,241],num:4,sT:27,hT:28,color:n},{pos:[305,126],num:1,sT:27.5,hT:28.5,color:i},{pos:[189,288],num:2,sT:28,hT:29,color:i},{pos:[472,427],num:3,sT:28.5,hT:29.5,color:i},{pos:[582,263],num:4,sT:29,hT:30,color:i},{pos:[370,187],num:1,sT:29.5,hT:30.5,color:h},{pos:[594,67],num:2,sT:30,hT:31,color:h},{pos:[807,284],num:3,sT:30.5,hT:31.5,color:h},{pos:[728,467],num:4,sT:31,hT:32,color:h},{pos:[370,266],num:1,sT:31.5,hT:32.5,color:i},{pos:[251,133],num:2,sT:32,hT:33,color:i},{pos:[475,225],num:3,sT:32.5,hT:33.5,color:i},{pos:[450,450],num:4,sT:33,hT:34,color:i},{pos:[330,354],num:1,sT:33.5,hT:34.5,color:i},{pos:[682,304],num:2,sT:34,hT:35,color:i},{pos:[437,181],num:3,sT:34.5,hT:35.5,color:i},{pos:[302,240],num:4,sT:35,hT:36,color:i},{pos:[302,119],num:1,sT:35.5,hT:36.5,color:h},{pos:[643,131],num:2,sT:36,hT:37,color:h},{pos:[702,457],num:3,sT:36.5,hT:37.5,color:h},{pos:[400,489],num:4,sT:37,hT:38,color:h},{pos:[136,365],num:1,sT:37.5,hT:38.5,color:n},{pos:[179,224],num:2,sT:38,hT:39,color:n},{pos:[430,315],num:3,sT:38.5,hT:39.5,color:n},{pos:[555,241],num:4,sT:39,hT:40,color:n},{pos:[305,126],num:1,sT:39.5,hT:40.5,color:i},{pos:[189,288],num:2,sT:40,hT:41,color:i},{pos:[472,427],num:3,sT:40.5,hT:41.5,color:i},{pos:[582,263],num:4,sT:41,hT:42,color:i},{pos:[370,187],num:1,sT:41.5,hT:42.5,color:h},{pos:[594,67],num:2,sT:42,hT:43,color:h},{pos:[807,284],num:3,sT:42.5,hT:43.5,color:h},{pos:[728,467],num:4,sT:43,hT:44,color:h},{pos:[370,266],num:1,sT:43.5,hT:44.5,color:i},{pos:[251,133],num:2,sT:44,hT:45,color:i},{pos:[475,225],num:3,sT:44.5,hT:45.5,color:i},{pos:[450,450],num:4,sT:45,hT:46,color:i}]};var c=class{constructor(s,t){this.color=s.color,this.radius=s.radius,this.posX=s.pos[0],this.posY=s.pos[1],this.endX=s.end[0],this.endY=s.end[1],this.number=s.number,this.sT=s.sT,this.hT=s.hT,this.eT=s.eT,this.currentTime=null,this.ctx=t}isInside(s,t){let o=this.posX+(this.endX-this.posX)*((this.currentTime-this.hT)/(this.eT-this.hT))-s,e=this.posY+(this.endY-this.posY)*((this.currentTime-this.hT)/(this.eT-this.hT))-t;return Math.pow(o,2)+Math.pow(e,2)<=this.radius*this.radius}setCurrentTime(s){this.currentTime=s}findSlope(){return(this.endY-this.posY)/(this.endX-this.posX)}findCurrentAngle(){return Math.atan(this.findSlope())}findConnectionPoints(){let s=this.findCurrentAngle(),t=s+Math.PI/2,o=s-Math.PI/2;return{firstStartPos:[this.posX+this.radius*Math.cos(t),this.posY+this.radius*Math.sin(t)],firstEndPos:[this.endX+this.radius*Math.cos(t),this.endY+this.radius*Math.sin(t)],secondStartPos:[this.posX+this.radius*Math.cos(o),this.posY+this.radius*Math.sin(o)],secondEndPos:[this.endX+this.radius*Math.cos(o),this.endY+this.radius*Math.sin(o)]}}drawTwoCircles(s){s.fillStyle=this.color,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.fill(),s.strokeStyle="white",s.lineWidth=3,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.stroke(),s.fillStyle="white",s.font="30px Arial",s.textBaseline="middle",s.fillText(this.number,this.posX-8,this.posY),s.fillStyle=this.color,s.beginPath(),s.arc(this.endX,this.endY,this.radius,0,2*Math.PI),s.fill(),s.strokeStyle="white",s.lineWidth=3,s.beginPath(),s.arc(this.endX,this.endY,this.radius,0,2*Math.PI),s.stroke()}drawSliderLines(s){const t=this.findConnectionPoints();s.lineWidth=3,s.strokeStyle="white",s.beginPath(),s.moveTo(t.firstStartPos[0],t.firstStartPos[1]),s.lineTo(t.firstEndPos[0],t.firstEndPos[1]),s.stroke(),s.beginPath(),s.moveTo(t.secondStartPos[0],t.secondStartPos[1]),s.lineTo(t.secondEndPos[0],t.secondEndPos[1]),s.stroke()}render(){const s=this.ctx;if(this.drawSliderLines(s),this.drawTwoCircles(s),this.currentTime>=this.hT&&this.currentTime<=this.eT){s.lineWidth=4,s.strokeStyle="yellow",s.beginPath();let t=this.posX+(this.endX-this.posX)*((this.currentTime-this.hT)/(this.eT-this.hT)),o=this.posY+(this.endY-this.posY)*((this.currentTime-this.hT)/(this.eT-this.hT));s.arc(t,o,this.radius,0,2*Math.PI),s.stroke()}this.currentTime>=this.sT&&this.currentTime<=this.hT&&(s.lineWidth=5,s.strokeStyle="rgba(102, 95, 95, 0.404)",s.beginPath(),s.arc(this.posX,this.posY,this.radius*(2.5*(this.hT-this.currentTime)+.95),0,2*Math.PI),s.stroke())}clear(s){console.log("hit!")}};var l=class{constructor(s,t){this.mousePos={x:0,y:0},this.canvas=s,this.ctx=t,this.beatmap=r,this.objects=[],this.combo=1,this.keyDown=!1,this.keyUp=!0,this.score=0,this.load()}load(){this.combo=1,this.score=0,this.initializeSound(),this.recordMousePos(),this.handleKeyDown(),this.handleKeyUp(),this.play()}loadCircles(){this.beatmap.data.forEach(s=>{s.slider?this.objects.push(new c({color:s.color,radius:35,pos:s.pos,end:s.end,number:s.num,sT:s.sT,hT:s.hT,eT:s.eT},this.ctx)):this.objects.push(new e({color:s.color,radius:35,pos:s.pos,number:s.num,sT:s.sT,hT:s.hT},this.ctx))})}play(){document.getElementById("play").addEventListener("click",s=>{s.preventDefault(),this.sound.volume=.7,this.sound.play(),this.canvas.focus(),this.loadCircles(),this.animate()})}animate(s){this.sound.currentTime<this.sound.duration&&(this.ctx.clearRect(0,0,1e3,580),this.objects.forEach(s=>{if(this.sound.currentTime>=s.sT&&s.eT<=this.sound.currentTime){let t=this.getMouse();s instanceof c&&s.isInside(t.x,t.y)?(this.handleClear(!0,300),this.incrementCombo()):this.handleClear()}else s.sT<=this.sound.currentTime&&(s.setCurrentTime(this.sound.currentTime),s.render())}),this.renderScore(),this.renderCombo(),requestAnimationFrame(this.animate.bind(this)))}initializeSound(){this.sound=document.createElement("audio"),this.sound.src=r.src,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound)}recordMousePos(){this.canvas.onmousemove=s=>{this.mousePos.x=s.pageX,this.mousePos.y=s.pageY}}handleKeyDown(){this.canvas.onkeydown=s=>{if(this.keyDown=!0,!this.keyUp)return;let t=this.getMouse();if(console.log(`{ pos: [${t.x}, ${t.y}], num: , sT: , hT: ${this.sound.currentTime}, color: },`),this.objects[0]instanceof e){this.objects[0].isInside(t.x,t.y)&&this.keyUp&&(this.objects[0].hT-.2<=this.sound.currentTime?(this.incrementCombo(),this.handleClear(!0,300)):this.objects[0].hT-.4<=this.sound.currentTime?(this.resetCombo(),this.handleClear(!0,100)):this.objects[0].hT-.5<=this.sound.currentTime?(this.resetCombo(),this.handleClear(!0,50)):(this.resetCombo(),this.handleClear()))}else if(this.objects[0]instanceof c){this.objects[0].isInside(t.x,t.y)&&this.keyUp&&this.sound.currentTime<=this.objects[0].hT+.1&&(this.objects[0].hT-.2<=this.sound.currentTime||this.sound.currentTime<=this.objects[0].hT+.1?(this.incrementCombo(),this.incrementScore(300),this.playHit()):this.objects[0].hT-.4<=this.sound.currentTime?(this.resetCombo(),this.incrementScore(100),this.playHit()):this.objects[0].hT-.5<=this.sound.currentTime?(this.resetCombo(),this.playHit()):this.resetCombo())}this.keyUp=!1}}incrementScore(s){this.score+=s*this.combo}incrementCombo(){this.combo+=1}resetCombo(){this.combo>=5?(this.playComboBreak(),this.combo=1):this.combo=1}renderScore(){this.ctx.font="bold 30px Arial",this.ctx.textBaseline="middle",this.ctx.textAlign="end",this.ctx.fillStyle="white",this.ctx.fillText(this.score,980,20),this.ctx.textAlign="start"}renderCombo(){this.ctx.font="40px Arial",this.ctx.fillStyle="white",this.ctx.fillText(`${this.combo}x`,10,560)}handleKeyUp(){this.canvas.onkeyup=s=>{this.keyDown=!1,this.keyUp=!0}}handleClear(s,t){s?(this.playHit(),this.incrementScore(t),this.objects.shift()):(this.resetCombo(),this.objects.shift())}playHit(){this.hitSound=document.createElement("audio"),this.hitSound.src="./dist/hit3.wav",this.hitSound.setAttribute("preload","auto"),this.hitSound.setAttribute("controls","none"),this.hitSound.volume=.5,this.hitSound.style.display="none",document.body.appendChild(this.hitSound),this.hitSound.play()}playComboBreak(){this.comboBreak=document.createElement("audio"),this.comboBreak.src="./dist/combobreak.mp3",this.comboBreak.setAttribute("preload","auto"),this.hitSound.setAttribute("controls","none"),this.comboBreak.style.display="none",document.body.appendChild(this.comboBreak),this.comboBreak.play()}getMouse(){let s,t,o=this.canvas,e=0,i=0;if(void 0!==o.offsetParent)do{e+=o.offsetLeft,i+=o.offsetTop}while(o=o.offsetParent);return s=this.mousePos.x-e,t=this.mousePos.y-i,{x:s,y:t}}};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementsByTagName("canvas")[0];s.width=1e3,s.height=580,s.style.backgroundColor="black",s.setAttribute("tabindex",0),s.focus();const t=s.getContext("2d");new l(s,t)})}]);