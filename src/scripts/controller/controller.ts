import IController from '../interfaces/Icontroller'
import IModel from '../interfaces/Imodel'
import IView from '../interfaces/Iview'
import {EKeys} from "../enum/EKeys";

class Controller implements IController {
  model: IModel;
  view: IView;
  constructor(model: IModel, view: IView){
    this.model = model;
    this.view = view;
    this.init()
  }
  init(){
    this.view.incSpS.onclick = this.incSpS.bind(this);
    this.view.decSpS.onclick = this.decSpS.bind(this);
    this.view.incGravity.onclick = this.incGravity.bind(this);
    this.view.decGravity.onclick = this.decGravity.bind(this);
    this.view.app.view.onclick = (e)=>{
      if (this.model.wasDeleted) {
        this.model.wasDeleted = false
      } else {
        this.view.draw( e.offsetX, e.offsetY)
      }
    };
    this.view.app.stage.on(EKeys.POINTERDOWN, (e) => {
      this.view.occupiedSqrCntr -= e.target.square;
      --this.view.shapesCounter;
      e.target.destroy();
      this.model.wasDeleted = true;
    });
    this.view.app.view.ontouchend = (e) => {
      e.preventDefault();
      if (this.model.wasDeleted) {
        this.model.wasDeleted = false
      } else (
          this.view.draw(e.changedTouches[0].clientX, e.changedTouches[0].clientY-50)
      );
    };
    this.view.app.ticker.add(() => this.view.update(this.model));

  };


  incSpS(){
    this.model.changeShapesPerSecond(true)
  };
  decSpS(){
    this.model.changeShapesPerSecond(false)
  };
  incGravity(){
    this.model.changeGravity(true);
  };
  decGravity(){
    this.model.changeGravity(false);
  };
}

export default  Controller
