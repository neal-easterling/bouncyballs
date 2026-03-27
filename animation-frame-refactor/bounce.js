'use strict';
import {Ball} from './scripts/Ball.js';
console.log('js connected!');

window.onload = init;

function init(){
    const bounceContainer = document.getElementById('bounce-container');
    const dropButton = document.getElementById('drop-button');
    const emptyButton = document.getElementById('empty-button');

    const balls = [];
    let drag = 0.001;
    let yFactor = 5;
    let xFactor = 2;

    dropButton.addEventListener('click', ()=>{
        let ball = new Ball();
        bounceContainer.appendChild(ball.element);
        ball.elementRef = document.getElementById(ball.id);
        balls.push(ball);
    });

    emptyButton.addEventListener('click', ()=>{
        let toRemove = document.getElementsByClassName('ball');
        while(toRemove.length > 0){
                toRemove.item(0).remove();
        }
        balls.length = 0;
    });

    function gameLoop(){
        balls.forEach((ball)=>{
            ball.yDir = (ball.y >= 300 - ball.size/2 || ball.y <= -10 + ball.size /2) ? ball.yDir * -1 : ball.yDir;
            ball.xDir = (ball.x >= 500 - ball.size/2 || ball.x <= 0 + ball.size /2) ? ball.xDir * -1 : ball.xDir;
            ball.y = ball.y + ball.velocity * ball.yDir * yFactor;
            ball.x = ball.x + ball.velocity * ball.xDir * xFactor;
            ball.elementRef.style.top =  `${ball.y}px`;
            ball.elementRef.style.left =  `${ball.x}px`;
        });
        requestAnimationFrame(gameLoop);
    }

    //Start Loop
    requestAnimationFrame(gameLoop);
}





