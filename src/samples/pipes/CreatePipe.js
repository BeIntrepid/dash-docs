export class One{
  title = '';

  // todo - perhaps this could be moved to a base class
  activate(model){
    this.title = model.title;
    this.sample();
  }

  sample(){
    console.log('hi');
  }

}
