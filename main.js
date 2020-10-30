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
var speed = 5;

var x = canvas.width/2;
var y = canvas.height/2-30;

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
    

    var dx = 2;
    var dy = -2;

    function drawBall() {
        if(y >= canvas.height - 25)
        {
            //console.log("test");
            y = canvas.height - 25;
        }

        y += speed

        if(speed < 5) 
        {
            speed += 0.5;
        }

            

        console.log(speed)

        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI*2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
    
    // function draw() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     drawBall();
    //     // x += dx;
    //     y += dy;
    // }


    drawBall();


    // console.log('tick')

    // setInterval(draw, 10);
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








document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        speed = -10;
        // console.log('hello reilly')
    }
});