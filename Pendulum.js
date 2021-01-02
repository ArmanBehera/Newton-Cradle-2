class Pendulum{

    constructor(x, y){

        var options = {

            restitution : 1,
            friction : 0,
            frictionAir : 0.0,
            slop : 1,
            inertia : Infinity
        }

        this.body = Bodies.circle(x, y, 40, options);

        this.radius = 40;

        // this.color = color;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        fill("blue");

        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);

        pop();
    }
}