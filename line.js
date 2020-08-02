class line{
    constructor(x,y){
    this.body=Bodies.rectangle(x,y,30,50);
    this.width=30;
    this.height=50;
    world.add(world,this.body);
    }
}