import {MyGraphics} from "../model/myGraphics";

export default interface IShape{
  coordX: number;
  coordY: number;
  shape: MyGraphics;
  square: number;
  draw(): MyGraphics;
  destroy():void;
}
