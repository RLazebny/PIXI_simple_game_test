import * as PIXI from 'pixi.js';
import IShape from '../interfaces/Ishape'
import {MyGraphics} from "./myGraphics";
import {ECoord} from "../enum/ECoord";
import {EShapeSize} from "../enum/EShapeSize";

class Shape implements IShape{
  shape = new MyGraphics();
  coordX: number;
  coordY: number;
  square: number;

  constructor(coordX: number, coordY: number = ECoord.START_POINT_Y){
    this.coordX = coordX;
    this.coordY = coordY;
    this.shape.interactive = true;
    this.shape.buttonMode = true;
    this.shape.lineStyle(4, this.setRandomColor(), 1);
    this.shape.beginFill(this.setRandomColor(), 1);
  }

  draw(): MyGraphics {
    return this.shape
  }

  destroy():void{
    this.shape.destroy()
  }

  setRandomColor(): number {
    return +`0x${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

class Circle extends Shape{
  radius: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y){
    super( coordX, coordY);
    this.radius = EShapeSize.CIRCLE_RADIUS;
    this.shape.drawCircle(this.coordX,  this.coordY, this.radius);
    this.shape.endFill();
    this.square = ~~(Math.PI*this.radius*this.radius);
    this.shape.square = this.square;
  };
}
class Ellipse extends Shape{
  width: number;
  height: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y){
    super( coordX, coordY);
    this.height = EShapeSize.ELLIPSE_HEIGHT;
    this.width = EShapeSize.ELLIPSE_WIDTH;
    this.shape.drawEllipse(this.coordX,  this.coordY, this.width, this.height);
    this.shape.endFill();
    this.square = ~~(Math.PI*this.width*this.height);
    this.shape.square = this.square;
  };
}

class Triangle extends Shape{
  radius: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y){
    super( coordX, coordY);
    this.radius = EShapeSize.CIRCLE_RADIUS;
    this.shape.drawStar(this.coordX,  this.coordY, 3, this.radius);
    this.shape.endFill();
    this.square = ~~((3*Math.sqrt(3)*this.radius*this.radius)/4);
    this.shape.square = this.square;
  };
}

class Square extends Shape{
  height: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y_SQUARE){
    super( coordX, coordY);
    this.height = EShapeSize.SQUARE_HEIGHT;
    this.shape.drawRect(this.coordX-50,  this.coordY-50, this.height, this.height);
    this.shape.endFill();
    this.square = this.height*this.height;
    this.shape.square = this.square;
  };
}

class Star extends Shape{
  radius: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y){
    super( coordX, coordY);
    this.radius = EShapeSize.CIRCLE_RADIUS;
    this.shape.drawStar(this.coordX, this.coordY, 5, this.radius);
    this.shape.endFill();
    this.square = ~~(1.12*this.radius*this.radius);
    this.shape.square = this.square;
  };
}

class Pentagon extends Shape{
  radius: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y){
    super( coordX, coordY);
    this.radius = EShapeSize.CIRCLE_RADIUS;
    this.shape.drawStar(this.coordX, this.coordY, 5, this.radius, 0.8 * this.radius);
    this.shape.endFill();
    this.square = 8600;
    this.shape.square = this.square;
  };
}

class Hexagon extends Shape{
  radius: number;
  constructor( coordX: number, coordY: number = ECoord.START_POINT_Y){
    super( coordX, coordY);
    this.radius = EShapeSize.CIRCLE_RADIUS;
    this.shape.drawStar(this.coordX, this.coordY, 3, this.radius, this.radius);
    this.shape.endFill();
    this.square = 9000;
    this.shape.square = this.square;
  };
}

export type TShapes = Square | Star | Hexagon | Circle | Pentagon | Ellipse | Triangle;

const shapes = [Square, Star, Hexagon, Circle, Pentagon, Ellipse, Triangle];

export default shapes;
