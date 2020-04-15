import * as PIXI from 'pixi.js';
import Model from './model/model'
import View from './view/view'
import Controller from './controller/controller'
import shapes from './model/shapes'

const app = new PIXI.Application();


const model = new Model();
const view = new View(app , shapes);
const controller = new Controller(model, view);

view.start();
