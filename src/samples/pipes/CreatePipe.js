import joint from 'jointjs';
import {PipeConverter} from 'dash-transform-vis';
import {Pipe} from 'dash-transform';
import prism from 'prism';

export class One{
  title = '';
  pipe = null;

  // todo - perhaps this could be moved to a base class
  activate(model){
    this.title = model.title;
    this.pipe = this.sample();
  }

  attached(){
    var V = joint.vectorizer;
    var g = joint.geometry;

    var graph = new joint.dia.Graph;

    var paper = new joint.dia.Paper({
      // replace with ref
      el: $('#MahDiagram'),
      width: 1280,
      height: 1024,
      gridSize: 1,
      model: graph,
      snapLinks: true,
      embeddingMode: true,
      validateEmbedding: function(childView, parentView) {
        return parentView.model instanceof joint.shapes.devs.Coupled;
      },
      validateConnection: function(sourceView, sourceMagnet, targetView, targetMagnet) {
        return sourceMagnet != targetMagnet;
      }
    });

    var pc = new PipeConverter();

    return pc.toJointGraph(this.pipe, graph);
  }

  sample(){
    var pipe = new Pipe();
    pipe.add(() => { return 'Hello World'; });
    console.log(pipe);
    return pipe.execute({});
    //pipe created.

  }

}
