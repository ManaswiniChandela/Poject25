class paper {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.image=loadImage("sprites/paper.png")
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world,this.body);
    this.x=x;
    this.y=y;
    this.r=r;
    

    }

    display() {
        var paperPos = this.body.position;
        
        push()
        translate(paperPos.x ,paperPos.y);
        rectMode(CENTER)
        fill(255)
        stroke(255)
        imageMode(CENTER)
        image(this.image,0,0,70)
        ellipse(0,0,this.r,this.r);
        pop()

    }
}