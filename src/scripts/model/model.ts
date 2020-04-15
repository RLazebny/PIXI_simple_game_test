import IModel from '../interfaces/Imodel'

class Model implements  IModel{
  shapesPerSecond = 1;
  gravity = 5;
  counter = 0;
  wasDeleted = false;
  changeGravity(value:boolean):void{
    if (value) {
        this.gravity += 1;
    } else {
      if ( this.gravity === 0) {
        return;
      } else {
        this.gravity -= 1
      }
    }
  }
  changeShapesPerSecond(value:boolean):void{
    if (value) {
      if ( this.shapesPerSecond === 59) {
        return;
      } else {
        this.shapesPerSecond += 1;
      }
    } else {
      if ( this.shapesPerSecond === 0) {
        return;
      } else {
        this.shapesPerSecond -= 1;
      }
    }
  }
}


export default  Model
