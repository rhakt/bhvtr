import {Editor} from './editor.es6';
import {View} from './view.es6';

let editor = new Editor();
let view = new View('view', 'world');

editor.setCode(`// sample code 
(function(args) {
  var hoge = function(x) {
    return x * x;
  };
  console.log(hoge(2));
  return hoge(3) + args;
});
`)

let exec = () => {
  try {
    const func = eval(editor.getCode());
    if(typeof func === 'function') return func;
    throw new Error("result of evaluate is not a function.");
  } catch (e) {
    alert(e.message);
  }
  return undefined;
};

document.getElementById('btn-exec').addEventListener('click', ()=>{
  const func = exec();
  if(func) {
    console.log(func(7));
  }
});

var object = new createjs.Shape();
object.graphics.beginFill("DarkRed");
object.graphics.drawCircle(0, 0, 100);
object.x = 200;
object.y = 200;
view.addShape(object);
view.update();
