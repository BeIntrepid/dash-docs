import {serviceLocator} from 'dash-core'
import * as dashGithub from 'dash-github'
import * as dashVis from 'dash-transform-vis'

export class BasicDashboard{

  constructor () {
  }


  activate(params) {
    this.model = params;
  }

  attached() {
    dashVis.runStuff();
  }

}
