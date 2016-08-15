export class View {

  constructor(parent, stage) {
    var v = document.getElementById(parent);
    console.log(parent);
    console.log(v);
    var canvas = document.createElement('canvas');
    canvas.id = stage;
    canvas.width = v.clientWidth;
    canvas.height = v.clientHeight;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";
    v.appendChild(canvas);
    this.stage = new createjs.Stage(stage);
  }

  addShape(shape) {
    this.stage.addChild(shape);
  }

  update() {
    this.stage.update()
  }
}
