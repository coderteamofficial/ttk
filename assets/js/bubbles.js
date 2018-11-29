var Bubbles=function(){function t(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.particles=[],this.counter=0}return t.prototype.init=function(){this.createElement(),this.loop()},t.prototype.createElement=function(){this.canvas.width=900,this.canvas.height=700,this.canvas.style.background="rgb(56, 115, 152, 0)",this.canvas.style.width="100%",this.ctx.transform(1,0,0,-1,this.canvas.width/2,this.canvas.height/2),document.getElementById("canvas").appendChild(this.canvas);for(var t=0;t<100;t++)this.createParticle()},t.prototype.createParticle=function(){this.particles.push({color:.5<Math.random()?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.4)",radius:40*Math.random(),x:10*(Math.random()-.5),y:-this.canvas.height/2.4,xVel:2*(Math.random()-.5),yVel:Math.random()+.5})},t.prototype.disappearParticle=function(t){t.radius<.5&&this.resetParticle(t),t.radius*=.994},t.prototype.resetParticle=function(t){t.radius=40*Math.random(),t.x=10*(Math.random()-.5),t.y=-this.canvas.height/2.4},t.prototype.moveParticle=function(t){t.x+=t.xVel,t.y+=t.yVel},t.prototype.draw=function(t){this.ctx.beginPath(),this.ctx.fillStyle=t.color,this.ctx.arc(t.x,t.y,t.radius,0,2*Math.PI),this.ctx.fill()},t.prototype.loop=function(){var t=this;this.counter<this.particles.length&&this.counter++,this.ctx.clearRect(-this.canvas.width/2,-this.canvas.height/2,this.canvas.width,this.canvas.height);for(var i=0;i<this.counter;i++)this.moveParticle(this.particles[i]),this.disappearParticle(this.particles[i]),this.draw(this.particles[i]);requestAnimationFrame(function(){return t.loop()})},t}();window.onload=function(){(new Bubbles).init()};