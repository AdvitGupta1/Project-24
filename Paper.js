class Paper{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            density:1.2,
            friction:0.5,
            restitution:0.3
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Matter.Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        push();
        fill("white");
        stroke("black");
        strokeWeight(5);
        ellipseMode(RADIUS);
        var pos=this.body.position;
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}