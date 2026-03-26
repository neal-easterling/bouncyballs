"use strict";

export class Ball{
    constructor(){
        this.id = String(Math.floor(Math.random() * 1000));
        this.x = Math.floor(Math.random() * (450 - 50) + 50);
        this.y = -20;
        this.yDir = 1;
        this.xDir = this.getRandomDir();
        this.velocity = Math.random();
        this.color = `rgb(${this.getRandom255()}, ${this.getRandom255()}, ${this.getRandom255()})`;
        this.size = Math.floor(Math.random() * (40 - 10) + 10);
        this.border = this.size / 2;
        this.element = this.create();
        this.elementRef = undefined;
    }
    create(){
        const ball = document.createElement('div');
        ball.id = this.id;
        ball.setAttribute('style', `width: ${this.size}px; height: ${this.size}px; border-radius: ${this.border}px; background-color: ${this.color}`);
        ball.style.top = `${this.y}px`;
        ball.style.left = `${this.x}px`;
        ball.classList.add('ball');
        console.log('ball created');
        return ball;  
    }
    getRandomDir(){
        let test  = Math.random();
        let dir = "1";
        if(test >= 0.5) dir = "-1";
        return dir;
    }
    getRandom255(){
        return Math.floor(Math.random() * 255);
    }
}