export class PipeWithInput {

  // todo - perhaps this could be moved to a base class
  activate(model){
    this.title = model.title;
    this.sample();
  }

  sample(){
    // I bet you want to know how to do pipes with inputs
  }

}
