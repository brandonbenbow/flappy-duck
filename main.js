let canvas = document.createElement("canvas");
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.zIndex = "-1";
canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;

document.body.appendChild(canvas);

// Refrences
var gameEngine;
var isRunning;

document.getElementById("start").addEventListener("click", function() {
    console.log("clicked start button");

    if(isRunning)
        restartGame();
    else
        startGame();
})

// Work from here, you can make other functions if you want, just call them from main()
function main() {
    /**
     * Canvas will draw the last thing called over the previous, so call background stuff before foreground stuff
     * Use variable 'ctx' to draw, read more here -- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
     * Canvas 0,0 point is the top left of the screen, positive y is actually lower on the screen than negative
     */

     // Start Here
}

// Game Engine
function tick() {
    canvas.width = canvas.width;

    main();
    
    //console.log("tick");
}

function startGame() {
    gameEngine = setInterval(() => {
        tick();
    }, Math.floor(1000/60));
    isRunning = true;
}

function restartGame() {
    clearInterval(gameEngine);

    startGame();
}