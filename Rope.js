class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
   var options={
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX,y:this.offsetY}
   }
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
}
    display(){
 var pointA=this.rope.bodyA.position;
 var pointB=this.rope.bodyB.position;
 strokeWeight(4);
 var anchor1X=pointA.x
     anchor1Y=pointA.y
     var aanchor2X=pointB.x+this.offsetX
      aanchor2Y=pointB.y+this.offsetY
 line(pointA.x,pointA.y,pointB.x ,aanchor2Y);
    }
  
 };