//sT = show at time
//hT = hit time

const grey = "rgba(102, 95, 95, 0.404)";
const red = "rgba(194, 4, 4, 0.479)";
const blue = "rgba(4, 17, 194, 0.479)";

export const DearYou = {
    src: "../dist/DearYou.mp3",
    name: "Dear You",
    author: "DJ Genericname",
    color: "silver",
    data: [
        { pos: [200, 100], num: 1, sT: 2, hT: 3 },
        { pos: [250, 150], num: 2, sT: 3, hT: 4 },
        { pos: [265, 165], num: 3, sT: 4, hT: 5 },
        { pos: [300, 300], num: 1, sT: 5, hT: 6 },
        { pos: [333, 250], num: 2, sT: 6, hT: 7 },
        { pos: [455, 222], num: 3, sT: 7, hT: 8 },

        { pos: [300, 300], num: 1, sT: 8, hT: 8.5 },
        { pos: [325, 275], num: 2, sT: 8, hT: 9 },
        { pos: [350, 250], num: 3, sT: 8, hT: 9.5 },
        { pos: [300, 300], num: 1, sT: 10.5, hT: 11.25 },
        { pos: [333, 250], num: 2, sT: 10.5, hT: 12 },
        { pos: [455, 222], num: 3, sT: 10.5, hT: 12.75 }
    ]
}


export const Gurenge = { 
    src: "../dist/gurenge.mp3",
    name: "Kimetsu no Yaiba OP Gurenge",
    author: "LiSa",
    data: [

        { pos: [343, 318], num: 1, sT: 0, hT: 0.902254, color: grey },
        { pos: [454, 225], num: 2, sT: 0, hT: 1.315567, color: grey },
        { pos: [631, 377], num: 3, sT: 0, hT: 1.755185, color: grey },
        { pos: [328, 357], num: 4, sT: 1.8, hT: 2.780242, color: grey },
        { pos: [418, 222], num: 5, sT: 1.8, hT: 3.131158, color: grey },
        { pos: [614, 367], num: 6, sT: 1.8, hT: 3.528053, color: grey },
        { pos: [265, 329], end: [599, 106], num: 1, sT: 3.5, hT: 4.336665, eT: 6.3534, color: red, slider: true },
        { pos: [330, 200], num: 2, sT: 5, hT: 7.626148, color: red },
        { pos: [537, 190], num: 3, sT: 5.5, hT: 8.033662, color: red },
        { pos: [537, 367], num: 4, sT: 6, hT: 8.407987, color: red },
        { pos: [332, 266], num: 1, sT: 8, hT: 9.315299, color: blue },
        { pos: [448, 268], num: 2, sT: 8, hT: 9.650101, color: blue },
        { pos: [569, 267], num: 3, sT: 8, hT: 9.993618, color: blue },
        { pos: [637, 354], num: 4, sT: 9.5, hT: 11.012805, color: blue },
        { pos: [500, 362], num: 5, sT: 9.5, hT: 11.323041, color: blue },
        { pos: [300, 380], end: [300, 260], num: 1, sT: 10.5, hT: 11.9222, eT: 12.4105, color: grey, slider: true },
        { pos: [380, 260], end: [380, 380], num: 2, sT: 11.4, hT: 12.7, eT: 13.1, color: grey, slider: true },
        { pos: [460, 380], end: [460, 260], num: 3, sT: 12.2, hT: 13.4, eT: 13.8, color: grey, slider: true },
        { pos: [540, 260], end: [540, 380], num: 4, sT: 13, hT: 14.1, eT: 14.5, color: grey, slider: true },
        { pos: [620, 380], end: [620, 260], num: 5, sT: 13.8, hT: 14.8, eT: 15.2, color: grey, slider: true },
        { pos: [540, 260], end: [540, 380], num: 1, sT: 14.6, hT: 15.5, eT: 15.9, color: red, slider: true },
        { pos: [460, 380], end: [460, 260], num: 2, sT: 15.4, hT: 16.2, eT: 16.6, color: red, slider: true },
        { pos: [380, 260], end: [380, 380], num: 3, sT: 16.2, hT: 16.9, eT: 17.3, color: red, slider: true },
        { pos: [300, 380], end: [300, 260], num: 4, sT: 17, hT: 17.6, eT: 18, color: red, slider: true },
        { pos: [300, 245], num: 5, sT: 17, hT: 18.2, color: red },
        
        { pos: [260, 250], num: 1, sT: 17.8, hT: 18.7, color: grey },
        { pos: [295, 250], num: 2, sT: 17.8, hT: 19, color: grey},
        { pos: [330, 250], num: 3, sT: 17.8, hT: 19.3, color: grey},
        { pos: [365, 250], num: 4, sT: 17.8, hT: 19.6, color: grey},
        { pos: [260, 320], num: 1, sT: 18.8, hT: 19.9, color: red },
        { pos: [295, 320], num: 2, sT: 18.8, hT: 20.2, color: red },
        { pos: [330, 320], num: 3, sT: 18.8, hT: 20.5, color: red },
        { pos: [365, 320], num: 4, sT: 18.8, hT: 20.8, color: red },
        { pos: [260, 390], num: 1, sT: 19.8, hT: 21.1, color: blue },
        { pos: [295, 390], num: 2, sT: 19.8, hT: 21.4, color: blue },
        { pos: [330, 390], num: 3, sT: 19.8, hT: 21.7, color: blue },
        { pos: [365, 390], num: 4, sT: 19.8, hT: 22, color: blue },


        { pos: [330, 354], num: 1, sT: 21.5, hT: 22.5, color: grey },
        { pos: [682, 304], num: 2, sT: 22, hT: 23, color: grey },
        { pos: [437, 181], num: 3, sT: 22.5, hT: 23.5, color: grey },
        { pos: [302, 240], num: 4, sT: 23, hT: 24, color: grey },
        { pos: [302, 119], num: 1, sT: 23.5, hT: 24.5, color: red },
        { pos: [643, 131], num: 2, sT: 24, hT: 25, color: red },
        { pos: [702, 457], num: 3, sT: 24.5, hT: 25.5, color: red },
        { pos: [400, 489], num: 4, sT: 25, hT: 26, color: red },
        { pos: [136, 365], num: 1, sT: 25.5, hT: 26.5, color: blue },
        { pos: [179, 224], num: 2, sT: 26, hT: 27, color: blue },
        { pos: [430, 315], num: 3, sT: 26.5, hT: 27.5, color: blue },
        { pos: [555, 241], num: 4, sT: 27, hT: 28, color: blue },
        { pos: [305, 126], num: 1, sT: 27.5, hT: 28.5, color: grey },
        { pos: [189, 288], num: 2, sT: 28, hT: 29, color: grey },
        { pos: [472, 427], num: 3, sT: 28.5, hT: 29.5, color: grey },
        { pos: [582, 263], num: 4, sT: 29, hT: 30, color: grey },
        { pos: [370, 187], num: 1, sT: 29.5, hT: 30.5, color: red },
        { pos: [594, 67], num: 2, sT: 30, hT: 31, color: red },
        { pos: [807, 284], num: 3, sT: 30.5, hT: 31.5, color: red },
        { pos: [728, 467], num: 4, sT: 31, hT: 32, color: red },
        { pos: [370, 266], num: 1, sT: 31.5, hT: 32.5, color: grey },
        { pos: [251, 133], num: 2, sT: 32, hT: 33, color: grey },
        { pos: [475, 225], num: 3, sT: 32.5 , hT: 33.5, color: grey },
        { pos: [450, 450], num: 4, sT: 33, hT: 34, color: grey},

        { pos: [330, 354], num: 1, sT: 33.5, hT: 34.5, color: grey },
        { pos: [682, 304], num: 2, sT: 34, hT: 35, color: grey },
        { pos: [437, 181], num: 3, sT: 34.5, hT: 35.5, color: grey },
        { pos: [302, 240], num: 4, sT: 35, hT: 36, color: grey },
        { pos: [302, 119], num: 1, sT: 35.5, hT: 36.5, color: red },
        { pos: [643, 131], num: 2, sT: 36, hT: 37, color: red },
        { pos: [702, 457], num: 3, sT: 36.5, hT: 37.5, color: red },
        { pos: [400, 489], num: 4, sT: 37, hT: 38, color: red },
        { pos: [136, 365], num: 1, sT: 37.5, hT: 38.5, color: blue },
        { pos: [179, 224], num: 2, sT: 38, hT: 39, color: blue },
        { pos: [430, 315], num: 3, sT: 38.5, hT: 39.5, color: blue },
        { pos: [555, 241], num: 4, sT: 39, hT: 40, color: blue },
        { pos: [305, 126], num: 1, sT: 39.5, hT: 40.5, color: grey },
        { pos: [189, 288], num: 2, sT: 40, hT: 41, color: grey },
        { pos: [472, 427], num: 3, sT: 40.5, hT: 41.5, color: grey },
        { pos: [582, 263], num: 4, sT: 41, hT: 42, color: grey },
        { pos: [370, 187], num: 1, sT: 41.5, hT: 42.5, color: red },
        { pos: [594, 67], num: 2, sT: 42, hT: 43, color: red },
        { pos: [807, 284], num: 3, sT: 42.5, hT: 43.5, color: red },
        { pos: [728, 467], num: 4, sT: 43, hT: 44, color: red },
        { pos: [370, 266], num: 1, sT: 43.5, hT: 44.5, color: grey },
        { pos: [251, 133], num: 2, sT: 44, hT: 45, color: grey },
        { pos: [475, 225], num: 3, sT: 44.5, hT: 45.5, color: grey },
        { pos: [450, 450], num: 4, sT: 45, hT: 46, color: grey },


    ]
}
