class Snow {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory =[];
    }