class Particle {
    constructor(x, y, radius) {
        var options ={
            restitution:0.4
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
};