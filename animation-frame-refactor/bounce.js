'use strict';
import {Ball} from './scripts/Ball.js';

const bounceContainer = document.getElementById('bounce-container');

console.log('js connected!');
const ball = new Ball().create();
bounceContainer.appendChild(ball);
console.log(ball);

