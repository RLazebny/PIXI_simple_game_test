import IModel from './Imodel'
import * as PIXI from 'pixi.js';
import Application = PIXI.Application;
import {TShapes} from "../model/shapes";


export default interface IView {
  wrapper: HTMLElement;
  gravityValue: HTMLElement;
  spsValue: HTMLElement;
  numberOfShapes: HTMLElement;
  occupiedSquare: HTMLElement;
  incSpS: HTMLElement;
  decSpS: HTMLElement;
  incGravity: HTMLElement;
  decGravity: HTMLElement;
  app: Application;
  shapes: TShapes[];
  occupiedSqrCntr: number;
  shapesCounter: number;

  update(data:IModel):void
  draw( coordX?: number, coordY?: number): void
  start():void;
}
