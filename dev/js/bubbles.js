var $ = jQuery.noConflict();
$(document).ready(function($) {

    'use strict';

    /*Bubbles*/
    var Bubbles = (function () {
        function Bubbles() {
            this.canvas = document.createElement('canvas');
            this.id = "canvas";
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.counter = 0;
        }
        Bubbles.prototype.init = function () {
            this.createElement();
            this.loop();
        };
        Bubbles.prototype.createElement = function () {
            var scale = 1;
            this.canvas.width = 700;
            this.canvas.height = 700;
            this.canvas.style.background = '';
            this.canvas.style.width = '100%';
            this.ctx.transform(scale, 0, 0, -scale, this.canvas.width / 2, this.canvas.height / 2);
            document.getElementById('canvas').appendChild(this.canvas);
            for(var i = 0; i < 50; i++) {
                this.createParticle();
            }
        };
        Bubbles.prototype.createParticle = function () {
            this.particles.push({
                color: Math.random() > 0.5 ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)",
                radius: Math.random() * 40,
                x: (Math.random() - 0.7) * 25,
                y: - this.canvas.height / 3,
                xVel: (Math.random() - 0.5) * 2,
                yVel: (Math.random() + 0.5)
            });
        };
        Bubbles.prototype.disappearParticle = function (p) {
            if (p.radius < 0.5) {
                this.resetParticle(p);
            }
            p.radius *= 0.994;
        };
        Bubbles.prototype.resetParticle = function (p) {
            p.radius = Math.random() * 40;
            p.x = (Math.random() - 0.7) * 25;
            p.y = - this.canvas.height / 3;
        };
        Bubbles.prototype.moveParticle = function (p) {
            p.x += p.xVel;
            p.y += p.yVel;
        };
        Bubbles.prototype.draw = function (p) {
            this.ctx.beginPath();
            this.ctx.fillStyle = p.color;
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
        };
        Bubbles.prototype.loop = function () {
            var _this = this;
            if (this.counter < this.particles.length) {
                this.counter ++;
            }
            this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
            for (var i = 0; i < this.counter; i++) {
                this.moveParticle(this.particles[i]);
                this.disappearParticle(this.particles[i]);
                this.draw(this.particles[i]);
            }
            requestAnimationFrame(function () { return _this.loop(); });
        };
        return Bubbles;
    })();
    window.onload = function () {
        var particles = new Bubbles();
        particles.init();
    };

});