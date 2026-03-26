'use strict';
import {Ball} from './scripts/Ball.js';
console.log('js connected!');

const bounceContainer = document.getElementById('bounce-container');
const dropButton = document.getElementById('drop-button');
const emptyButton = document.getElementById('empty-button');

const balls = [];
let drag = 0.1;



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

let loop = setInterval(()=>{
    balls.forEach((ball)=>{
        ball.y = ball.y + ball.velocity * ball.yDir;
        ball.elementRef.style.top =  `${ball.y}px`;
})}, 10);



