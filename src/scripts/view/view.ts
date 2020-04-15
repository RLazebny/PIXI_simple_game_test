// @ts-ignore
import {shapes} from '../model/shapes'
import IView from '../interfaces/Iview'
import * as PIXI from 'pixi.js';
import Application = PIXI.Application;
import {ECoord} from "../enum/ECoord";
import {EKeys} from "../enum/EKeys";


class View implements IView {
  wrapper: HTMLElement = document.querySelector('.wrapper');
  gravityValue: HTMLElement = document.getElementById("gravValue");
  spsValue: HTMLElement = document.getElementById("SpSValue");
  numberOfShapes: HTMLElement = document.getElementById("numberOfShapes");
  occupiedSquare: HTMLElement = document.getElementById("occupiedSquare");
  incSpS: HTMLElement = document.getElementById("incSpS");
  decSpS: HTMLElement = document.getElementById("decSpS");
  incGravity: HTMLElement = document.getElementById("incGrav");
  decGravity: HTMLElement = document.getElementById("decGrav");
  app: Application;
  width: number;
  height: number;
  shapes: shapes;
  occupiedSqrCntr = 0;
  shapesCounter = -1;

  constructor(app: PIXI.Application, shapes ){
    this.width = window.innerWidth < 500 ? window.innerWidth : window.innerWidth - EKeys.STAGE_PADDING;
    this.height  = window.innerHeight - EKeys.STAGE_PADDING;
    this.app = app;
    this.shapes = shapes;
    this.app.stage.interactive = true;
    this.app.view.width = this.width;
    this.app.view.height = this.height;
  }

  draw( coordX = this.setRandomPointX(), coordY?){
    const shape = new this.shapes[this.getRandomShapes()](coordX, coordY).draw();
    this.occupiedSqrCntr += shape.square;
    this.shapesCounter += 1;
    this.app.stage.addChildAt(shape, 0);
  };

  start():void {
    this.wrapper.appendChild(this.app.view)
  };

  update(data):void {
    data.counter += 1;
    if(data.counter == Math.floor(60/data.shapesPerSecond) || Number(this.spsValue.innerText) != data.shapesPerSecond){
      this.draw();
      data.counter = 0
    }

    let children: shapes = this.app.stage.children;
    if (children.length === 1) {
      this.shapesCounter = 0;
      this.occupiedSqrCntr = 0;
      this.numberOfShapes.textContent = '0';
      this.occupiedSquare.textContent = '0';
    } else {
    for (let i = 0; i < children.length - 1; i++) {
      children[i].position.y += data.gravity;
      if(children[i].position.y > (this.height + ECoord.END_POINT_Y)){
        this.occupiedSqrCntr -= children[i].square;
        this.shapesCounter -= 1;
        this.app.stage.removeChild(children[i]);
      }
      this.spsValue.textContent = data.shapesPerSecond.toString();
      this.gravityValue.textContent = data.gravity.toString();
      this.numberOfShapes.textContent = this.shapesCounter.toString();
      this.occupiedSquare.textContent = this.occupiedSqrCntr.toString();
    }
  }
}

  getRandomShapes():number {
    return Math.floor(Math.random() * this.shapes.length);
  }

  setRandomPointX(): number {
    return 50 + Math.floor(Math.random() * (this.width - 100));
  }
}


export default View
