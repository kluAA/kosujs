!function(s){var o={};function t(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return s[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=s,t.c=o,t.d=function(s,o,e){t.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:e})},t.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},t.t=function(s,o){if(1&o&&(s=t(s)),8&o)return s;if(4&o&&"object"==typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&o&&"string"!=typeof s)for(var i in s)t.d(e,i,function(o){return s[o]}.bind(null,i));return e},t.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(o,"a",o),o},t.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},t.p="",t(t.s=0)}([function(s,o,t){"use strict";t.r(o);var e=class{constructor(s,o){this.color=s.color,this.radius=s.radius,this.posX=s.pos[0],this.posY=s.pos[1],this.number=s.number,this.sT=s.sT,this.hT=s.hT,this.eT=this.hT,this.currentTime=null,this.ctx=o}isInside(s,o){let t=this.posX-s,e=this.posY-o;return Math.pow(t,2)+Math.pow(e,2)<=this.radius*this.radius}setCurrentTime(s){this.currentTime=s}render(){const s=this.ctx;s.fillStyle=this.color,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.fill(),s.strokeStyle="white",s.lineWidth=3,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.stroke(),s.fillStyle="white",s.font="30px Arial",s.textBaseline="middle",s.fillText(this.number,this.posX-8,this.posY),this.currentTime>=this.sT&&this.currentTime<=this.hT&&(s.lineWidth=5,s.strokeStyle=this.color,s.beginPath(),s.arc(this.posX,this.posY,this.radius*(2.5*(this.hT-this.currentTime)+.95),0,2*Math.PI),s.stroke())}clear(s){console.log("hit!")}};const i="rgba(102, 95, 95, 0.404)",h="rgba(194, 4, 4, 0.479)",n="rgba(4, 17, 194, 0.479)",r={src:"./dist/gurenge.mp3",name:"Kimetsu no Yaiba OP Gurenge",author:"LiSa",data:[{pos:[343,318],num:1,sT:0,hT:.902254,color:i},{pos:[454,225],num:2,sT:0,hT:1.315567,color:i},{pos:[631,377],num:3,sT:0,hT:1.755185,color:i},{pos:[328,357],num:4,sT:1.8,hT:2.780242,color:i},{pos:[418,222],num:5,sT:1.8,hT:3.131158,color:i},{pos:[614,367],num:6,sT:1.8,hT:3.528053,color:i},{pos:[265,329],end:[599,106],num:1,sT:3.5,hT:4.336665,eT:6.3534,color:h,slider:!0},{pos:[330,200],num:2,sT:5,hT:7.626148,color:h},{pos:[537,190],num:3,sT:5.5,hT:8.033662,color:h},{pos:[537,367],num:4,sT:6,hT:8.407987,color:h},{pos:[332,266],num:1,sT:8,hT:9.315299,color:n},{pos:[448,268],num:2,sT:8,hT:9.650101,color:n},{pos:[569,267],num:3,sT:8,hT:9.993618,color:n},{pos:[637,354],num:4,sT:9.5,hT:11.012805,color:n},{pos:[500,362],num:5,sT:9.5,hT:11.323041,color:n},{pos:[300,380],end:[300,260],num:1,sT:10.5,hT:11.9222,eT:12.4105,color:i,slider:!0},{pos:[380,260],end:[380,380],num:2,sT:11.4,hT:12.7,eT:13.1,color:i,slider:!0},{pos:[460,380],end:[460,260],num:3,sT:12.2,hT:13.4,eT:13.8,color:i,slider:!0},{pos:[540,260],end:[540,380],num:4,sT:13,hT:14.1,eT:14.5,color:i,slider:!0},{pos:[620,380],end:[620,260],num:5,sT:13.8,hT:14.8,eT:15.2,color:i,slider:!0},{pos:[540,260],end:[540,380],num:1,sT:14.6,hT:15.5,eT:15.9,color:h,slider:!0},{pos:[460,380],end:[460,260],num:2,sT:15.4,hT:16.2,eT:16.6,color:h,slider:!0},{pos:[380,260],end:[380,380],num:3,sT:16.2,hT:16.9,eT:17.3,color:h,slider:!0},{pos:[300,380],end:[300,260],num:4,sT:17,hT:17.6,eT:18,color:h,slider:!0},{pos:[300,245],num:5,sT:17,hT:18.2,color:h},{pos:[260,250],num:1,sT:17.8,hT:18.7,color:i},{pos:[295,250],num:2,sT:17.8,hT:19,color:i},{pos:[330,250],num:3,sT:17.8,hT:19.3,color:i},{pos:[365,250],num:4,sT:17.8,hT:19.6,color:i},{pos:[260,320],num:1,sT:18.8,hT:19.9,color:h},{pos:[295,320],num:2,sT:18.8,hT:20.2,color:h},{pos:[330,320],num:3,sT:18.8,hT:20.5,color:h},{pos:[365,320],num:4,sT:18.8,hT:20.8,color:h},{pos:[260,390],num:1,sT:19.8,hT:21.1,color:n},{pos:[295,390],num:2,sT:19.8,hT:21.4,color:n},{pos:[330,390],num:3,sT:19.8,hT:21.7,color:n},{pos:[365,390],num:4,sT:19.8,hT:22,color:n},{pos:[330,354],num:1,sT:21.5,hT:22.5,color:i},{pos:[682,304],num:2,sT:22,hT:23,color:i},{pos:[437,181],num:3,sT:22.5,hT:23.5,color:i},{pos:[302,240],num:4,sT:23,hT:24,color:i},{pos:[302,119],num:1,sT:23.5,hT:24.5,color:h},{pos:[643,131],num:2,sT:24,hT:25,color:h},{pos:[702,457],num:3,sT:24.5,hT:25.5,color:h},{pos:[400,489],num:4,sT:25,hT:26,color:h},{pos:[136,365],num:1,sT:25.5,hT:26.5,color:n},{pos:[179,224],num:2,sT:26,hT:27,color:n},{pos:[430,315],num:3,sT:26.5,hT:27.5,color:n},{pos:[555,241],num:4,sT:27,hT:28,color:n},{pos:[305,126],num:1,sT:27.5,hT:28.5,color:i},{pos:[189,288],num:2,sT:28,hT:29,color:i},{pos:[472,427],num:3,sT:28.5,hT:29.5,color:i},{pos:[582,263],num:4,sT:29,hT:30,color:i},{pos:[370,187],num:1,sT:29.5,hT:30.5,color:h},{pos:[594,67],num:2,sT:30,hT:31,color:h},{pos:[807,284],num:3,sT:30.5,hT:31.5,color:h},{pos:[728,467],num:4,sT:31,hT:32,color:h},{pos:[370,266],num:1,sT:31.5,hT:32.5,color:i},{pos:[251,133],num:2,sT:32,hT:33,color:i},{pos:[475,225],num:3,sT:32.5,hT:33.5,color:i},{pos:[450,450],num:4,sT:33,hT:34,color:i},{pos:[330,354],num:1,sT:33.5,hT:34.5,color:i},{pos:[682,304],num:2,sT:34,hT:35,color:i},{pos:[437,181],num:3,sT:34.5,hT:35.5,color:i},{pos:[302,240],num:4,sT:35,hT:36,color:i},{pos:[302,119],num:1,sT:35.5,hT:36.5,color:h},{pos:[643,131],num:2,sT:36,hT:37,color:h},{pos:[702,457],num:3,sT:36.5,hT:37.5,color:h},{pos:[400,489],num:4,sT:37,hT:38,color:h},{pos:[136,365],num:1,sT:37.5,hT:38.5,color:n},{pos:[179,224],num:2,sT:38,hT:39,color:n},{pos:[430,315],num:3,sT:38.5,hT:39.5,color:n},{pos:[555,241],num:4,sT:39,hT:40,color:n},{pos:[305,126],num:1,sT:39.5,hT:40.5,color:i},{pos:[189,288],num:2,sT:40,hT:41,color:i},{pos:[472,427],num:3,sT:40.5,hT:41.5,color:i},{pos:[582,263],num:4,sT:41,hT:42,color:i},{pos:[370,187],num:1,sT:41.5,hT:42.5,color:h},{pos:[594,67],num:2,sT:42,hT:43,color:h},{pos:[807,284],num:3,sT:42.5,hT:43.5,color:h},{pos:[728,467],num:4,sT:43,hT:44,color:h},{pos:[370,266],num:1,sT:43.5,hT:44.5,color:i},{pos:[251,133],num:2,sT:44,hT:45,color:i},{pos:[475,225],num:3,sT:44.5,hT:45.5,color:i},{pos:[450,450],num:4,sT:45,hT:46,color:i},{pos:[310,288],end:[480,288],num:5,sT:45.5,hT:46.5,eT:47,color:i,slider:!0},{pos:[199,160],num:1,sT:46.4,hT:47.381785,color:h},{pos:[198,212],num:2,sT:46.7,hT:47.686687,color:h},{pos:[203,359],num:3,sT:47,hT:48.04781,color:h},{pos:[302,332],num:1,sT:48.1,hT:49.107089,color:n},{pos:[387,344],num:2,sT:48.4,hT:49.457695,color:n},{pos:[558,334],num:3,sT:48.7,hT:49.82206,color:n},{pos:[296,314],end:[349,249],num:1,sT:49.6,hT:50.662151,eT:50.9266,color:i,slider:!0},{pos:[469,252],end:[432,334],num:2,sT:50.1,hT:51.1617,eT:51.5112,color:i,slider:!0},{pos:[642,334],end:[605,252],num:3,sT:50.6,hT:51.7463,eT:52.0958,color:i,slider:!0},{pos:[520,224],num:4,sT:51.5,hT:52.411863,color:i},{pos:[308,185],num:1,sT:53,hT:53.628692,color:h},{pos:[471,187],num:2,sT:53,hT:54.020811,color:h},{pos:[644,187],num:3,sT:53,hT:54.453834,color:h},{pos:[652,304],num:1,sT:54.4,hT:55.473249,color:n},{pos:[505,293],num:2,sT:54.4,hT:55.830902,color:n},{pos:[321,279],num:3,sT:54.4,hT:56.258348,color:n},{pos:[334,426],num:1,sT:56.3,hT:57.336975,color:i},{pos:[498,404],num:2,sT:56.3,hT:57.624654,color:i},{pos:[670,414],num:3,sT:56.3,hT:58.002852,color:i},{pos:[300,380],end:[300,260],num:1,sT:58.7,hT:60,eT:60.4,color:i,slider:!0},{pos:[380,260],end:[380,380],num:2,sT:59.5,hT:60.7,eT:61,color:i,slider:!0},{pos:[460,380],end:[460,260],num:3,sT:60.3,hT:61.4,eT:61.7,color:i,slider:!0},{pos:[540,260],end:[540,380],num:4,sT:61.1,hT:62.1,eT:62.4,color:i,slider:!0},{pos:[620,380],end:[620,260],num:5,sT:61.9,hT:62.8,eT:63.1,color:i,slider:!0},{pos:[540,260],end:[540,380],num:1,sT:62.7,hT:63.5,eT:63.8,color:h,slider:!0},{pos:[460,380],end:[460,260],num:2,sT:63.5,hT:64.2,eT:64.5,color:h,slider:!0},{pos:[380,260],end:[380,380],num:3,sT:64.3,hT:64.9,eT:65.2,color:h,slider:!0},{pos:[300,380],end:[300,260],num:4,sT:65.1,hT:65.6,eT:65.9,color:h,slider:!0},{pos:[231,200],num:1,sT:65.7,hT:66.742566,color:n},{pos:[329,302],num:2,sT:66.2,hT:67.216487,color:n},{pos:[415,420],num:3,sT:66.7,hT:67.678298,color:n},{pos:[567,346],num:1,sT:67.1,hT:68.119173,color:i},{pos:[435,182],num:2,sT:67.5,hT:68.599851,color:i},{pos:[538,104],num:3,sT:68.3,hT:69.31415,color:i},{pos:[661,153],num:1,sT:68.7,hT:69.714881,color:h},{pos:[634,316],num:2,sT:69.06,hT:70.06836,color:h},{pos:[720,479],num:3,sT:69.35,hT:70.371737,color:h},{pos:[446,221],num:1,sT:69.97,hT:70.973068,color:n},{pos:[270,283],num:2,sT:70.395,hT:71.395565,color:n},{pos:[345,404],num:3,sT:70.74,hT:71.741526,color:n},{pos:[653,320],num:1,sT:71.1,hT:72.103771,color:i},{pos:[260,285],num:1,sT:73.280459,hT:74.280459,color:h},{pos:[319,173],num:2,sT:73.702631,hT:74.702631,color:h},{pos:[545,263],num:3,sT:74.171508,hT:75.171508,color:h},{pos:[308,417],num:1,sT:74.633744,hT:75.633744,color:n},{pos:[500,448],num:2,sT:75.050122,hT:76.050122,color:n},{pos:[745,398],num:3,sT:75.477145,hT:76.477145,color:n},{pos:[626,98],num:1,sT:75.950639,hT:76.950639,color:i},{pos:[313,140],num:2,sT:76.399035,hT:77.399035,color:i},{pos:[462,378],num:3,sT:76.808652,hT:77.808652,color:i},{pos:[571,203],num:1,sT:77.275891,hT:78.275891,color:h},{pos:[475,88],num:2,sT:77.690221,hT:78.690221,color:h},{pos:[373,323],num:3,sT:78.147559,hT:79.147559,color:h},{pos:[272,256],num:1,sT:78.619668,hT:79.619668,color:n},{pos:[448,242],num:2,sT:79.05093,hT:80.05093,color:n},{pos:[576,323],num:3,sT:79.493412,hT:80.493412,color:n},{pos:[469,407],num:1,sT:79.934305,hT:80.934305,color:i},{pos:[316,340],num:2,sT:80.378488,hT:81.378488,color:i},{pos:[341,218],num:3,sT:80.836493,hT:81.836493,color:i},{pos:[582,172],num:1,sT:81.287592,hT:82.287592,color:h},{pos:[691,375],num:2,sT:81.760697,hT:82.760697,color:h},{pos:[513,459],num:3,sT:82.248602,hT:83.248602,color:h},{pos:[297,359],num:1,sT:82.681623,hT:83.681623,color:n},{pos:[378,191],num:2,sT:83.137136,hT:84.137136,color:n},{pos:[716,196],num:3,sT:83.513043,hT:84.513043,color:n},{pos:[194,251],end:[827,251],num:1,sT:83.3,hT:84.33,eT:88.1,color:h,slider:!0}]};var T=class{constructor(s,o){this.color=s.color,this.radius=s.radius,this.posX=s.pos[0],this.posY=s.pos[1],this.endX=s.end[0],this.endY=s.end[1],this.number=s.number,this.sT=s.sT,this.hT=s.hT,this.eT=s.eT,this.currentTime=null,this.ctx=o}isInside(s,o){let t=this.posX+(this.endX-this.posX)*((this.currentTime-this.hT)/(this.eT-this.hT))-s,e=this.posY+(this.endY-this.posY)*((this.currentTime-this.hT)/(this.eT-this.hT))-o;return Math.pow(t,2)+Math.pow(e,2)<=this.radius*this.radius}setCurrentTime(s){this.currentTime=s}findSlope(){return(this.endY-this.posY)/(this.endX-this.posX)}findCurrentAngle(){return Math.atan(this.findSlope())}findConnectionPoints(){let s=this.findCurrentAngle(),o=s+Math.PI/2,t=s-Math.PI/2;return{firstStartPos:[this.posX+this.radius*Math.cos(o),this.posY+this.radius*Math.sin(o)],firstEndPos:[this.endX+this.radius*Math.cos(o),this.endY+this.radius*Math.sin(o)],secondStartPos:[this.posX+this.radius*Math.cos(t),this.posY+this.radius*Math.sin(t)],secondEndPos:[this.endX+this.radius*Math.cos(t),this.endY+this.radius*Math.sin(t)]}}drawTwoCircles(s){s.fillStyle=this.color,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.fill(),s.strokeStyle="white",s.lineWidth=3,s.beginPath(),s.arc(this.posX,this.posY,this.radius,0,2*Math.PI),s.stroke(),s.fillStyle="white",s.font="30px Arial",s.textBaseline="middle",s.fillText(this.number,this.posX-8,this.posY),s.fillStyle=this.color,s.beginPath(),s.arc(this.endX,this.endY,this.radius,0,2*Math.PI),s.fill(),s.strokeStyle="white",s.lineWidth=3,s.beginPath(),s.arc(this.endX,this.endY,this.radius,0,2*Math.PI),s.stroke()}drawSliderLines(s){const o=this.findConnectionPoints();s.lineWidth=3,s.strokeStyle="white",s.beginPath(),s.moveTo(o.firstStartPos[0],o.firstStartPos[1]),s.lineTo(o.firstEndPos[0],o.firstEndPos[1]),s.stroke(),s.beginPath(),s.moveTo(o.secondStartPos[0],o.secondStartPos[1]),s.lineTo(o.secondEndPos[0],o.secondEndPos[1]),s.stroke()}render(){const s=this.ctx;if(this.drawSliderLines(s),this.drawTwoCircles(s),this.currentTime>=this.hT&&this.currentTime<=this.eT){s.lineWidth=4,s.strokeStyle="yellow",s.beginPath();let o=this.posX+(this.endX-this.posX)*((this.currentTime-this.hT)/(this.eT-this.hT)),t=this.posY+(this.endY-this.posY)*((this.currentTime-this.hT)/(this.eT-this.hT));s.arc(o,t,this.radius,0,2*Math.PI),s.stroke()}this.currentTime>=this.sT&&this.currentTime<=this.hT&&(s.lineWidth=5,s.strokeStyle="rgba(102, 95, 95, 0.404)",s.beginPath(),s.arc(this.posX,this.posY,this.radius*(2.5*(this.hT-this.currentTime)+.95),0,2*Math.PI),s.stroke())}clear(s){console.log("hit!")}};var l=class{constructor(s,o){this.mousePos={x:0,y:0},this.canvas=s,this.ctx=o,this.beatmap=r,this.objects=[],this.combo=1,this.keyDown=!1,this.keyUp=!0,this.score=0,this.load()}load(){this.combo=1,this.score=0,this.initializeSound(),this.recordMousePos(),this.handleKeyDown(),this.handleKeyUp(),this.play()}loadCircles(){this.beatmap.data.forEach(s=>{s.slider?this.objects.push(new T({color:s.color,radius:35,pos:s.pos,end:s.end,number:s.num,sT:s.sT,hT:s.hT,eT:s.eT},this.ctx)):this.objects.push(new e({color:s.color,radius:35,pos:s.pos,number:s.num,sT:s.sT,hT:s.hT},this.ctx))})}play(){document.getElementById("play").addEventListener("click",s=>{s.preventDefault(),this.sound.volume=.7,this.sound.play(),this.canvas.focus(),this.loadCircles(),this.animate()})}animate(s){this.sound.currentTime<this.sound.duration&&(this.ctx.clearRect(0,0,1e3,580),this.objects.forEach(s=>{if(this.sound.currentTime>=s.sT&&s.eT<=this.sound.currentTime){let o=this.getMouse();s instanceof T&&s.isInside(o.x,o.y)&&!this.keyUp?(this.handleClear(!0,300),this.incrementCombo()):this.handleClear()}else s.sT<=this.sound.currentTime&&(s.setCurrentTime(this.sound.currentTime),s.render())}),this.renderScore(),this.renderCombo(),requestAnimationFrame(this.animate.bind(this)))}initializeSound(){this.sound=document.createElement("audio"),this.sound.src=r.src,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound)}recordMousePos(){this.canvas.onmousemove=s=>{this.mousePos.x=s.pageX,this.mousePos.y=s.pageY}}handleKeyDown(){this.canvas.onkeydown=s=>{if(this.keyDown=!0,!this.keyUp)return;let o=this.getMouse();if(console.log(`{ pos: [${o.x}, ${o.y}], num: , sT: ${this.sound.currentTime-1}, hT: ${this.sound.currentTime}, color: },`),this.objects[0]instanceof e){this.objects[0].isInside(o.x,o.y)&&this.keyUp&&(this.objects[0].hT-.2<=this.sound.currentTime?(this.incrementCombo(),this.handleClear(!0,300)):this.objects[0].hT-.4<=this.sound.currentTime?(this.resetCombo(),this.handleClear(!0,100)):this.objects[0].hT-.5<=this.sound.currentTime?(this.resetCombo(),this.handleClear(!0,50)):(this.resetCombo(),this.handleClear()))}else if(this.objects[0]instanceof T){this.objects[0].isInside(o.x,o.y)&&this.keyUp&&this.sound.currentTime<=this.objects[0].hT+.1&&(this.objects[0].hT-.2<=this.sound.currentTime||this.sound.currentTime<=this.objects[0].hT+.1?(this.incrementCombo(),this.incrementScore(300),this.playHit()):this.objects[0].hT-.4<=this.sound.currentTime?(this.resetCombo(),this.incrementScore(100),this.playHit()):this.objects[0].hT-.5<=this.sound.currentTime?(this.resetCombo(),this.playHit()):this.resetCombo())}this.keyUp=!1}}incrementScore(s){this.score+=s*this.combo}incrementCombo(){this.combo+=1}resetCombo(){this.combo>=5?(this.playComboBreak(),this.combo=1):this.combo=1}renderScore(){this.ctx.font="bold 30px Arial",this.ctx.textBaseline="middle",this.ctx.textAlign="end",this.ctx.fillStyle="white",this.ctx.fillText(this.score,980,20),this.ctx.textAlign="start"}renderCombo(){this.ctx.font="40px Arial",this.ctx.fillStyle="white",this.ctx.fillText(`${this.combo}x`,10,560)}handleKeyUp(){this.canvas.onkeyup=s=>{this.keyDown=!1,this.keyUp=!0}}handleClear(s,o){s?(this.playHit(),this.incrementScore(o),this.objects.shift()):(this.resetCombo(),this.objects.shift())}playHit(){this.hitSound=document.createElement("audio"),this.hitSound.src="./dist/hit3.wav",this.hitSound.setAttribute("preload","auto"),this.hitSound.setAttribute("controls","none"),this.hitSound.volume=.5,this.hitSound.style.display="none",document.body.appendChild(this.hitSound),this.hitSound.play()}playComboBreak(){this.comboBreak=document.createElement("audio"),this.comboBreak.src="./dist/combobreak.mp3",this.comboBreak.setAttribute("preload","auto"),this.hitSound.setAttribute("controls","none"),this.comboBreak.style.display="none",document.body.appendChild(this.comboBreak),this.comboBreak.play()}getMouse(){let s,o,t=this.canvas,e=0,i=0;if(void 0!==t.offsetParent)do{e+=t.offsetLeft,i+=t.offsetTop}while(t=t.offsetParent);return s=this.mousePos.x-e,o=this.mousePos.y-i,{x:s,y:o}}};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementsByTagName("canvas")[0];s.width=1e3,s.height=580,s.style.backgroundColor="black",s.setAttribute("tabindex",0),s.focus();const o=s.getContext("2d");new l(s,o)})}]);