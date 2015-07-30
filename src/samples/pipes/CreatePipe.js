export class One{
  title = '';
  pipe = null;

  // todo - perhaps this could be moved to a base class
  activate(model){
    this.title = model.title;
    this.sample();
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

    return pc.toJointGraph(this.pipe,graph);
  }

  sample(){
    console.log('hi azim');

    // this.pipe = // create pipe

    //pipe created.
  }

}
