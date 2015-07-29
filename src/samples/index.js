export class Index {
  samples = [];

  constructor(){
    // NOTE perhaps a child router is a better bet here
    this.samples.push({ title: 'Create a Pipe', file: 'pipes/CreatePipe'});
    this.samples.push({ title: 'Pipe with Input', file: 'pipes/PipeWithInput'});
  }

  activate(){

  }
}
