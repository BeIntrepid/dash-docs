import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {ServiceLocator} from 'dash-core'
import * as dashComponent from 'dash-component'
import * as dashTVis from 'dash-transform-vis'

export class App {

  constructor()
  {
    this.insertComponentModels();
    this.insertAreaModels();
    ServiceLocator.services.chromeComponentInfo.path = 'dash-component' + ServiceLocator.services.chromeComponentInfo.path;
  }

  insertAreaModels()
  {
    var mockAreaResponse = new dashComponent.AreaConfiguration();

    mockAreaResponse.areaLayout = new dashComponent.AreaLayout();
    mockAreaResponse.areaLayout.viewModel = 'dash-component/layouts/floatLayout/floatLayout';

    var layoutConfig = new dashComponent.LayoutConfiguration();
    layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
    layoutConfig.componentsForCompose = [
      {id: 1, viewModel:'dash-github/components/singleValueComponent/gitSingleValueComponent'},
      {id: 1, viewModel:'dash-github/components/imageGrid/imageGrid'}
    ];

    mockAreaResponse.layouts.push(layoutConfig);


    layoutConfig = new dashComponent.LayoutConfiguration();
    layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
    layoutConfig.componentsForCompose = [
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'},
      {id: 1, viewModel:'components/testComponent/testComponent'}
    ];

    mockAreaResponse.layouts.push(layoutConfig);

    ServiceLocator.services.areaLoader.addAreaConfiguration('test',mockAreaResponse);
  }

  insertComponentModels()
  {
    ServiceLocator.services.componentModelLoader.getModels()[1] = { id:1, configurationProperties : {}, layoutInfo : {} };
  }

  configureRouter(config, router){
    config.title = 'Aurelia';
    //config.addPipelineStep('modelbind',modelbind);
    config.map([
      { route: ['','d/:areaId'],  moduleId: './dashboards/dash/Dashboard',      nav: true, title:'Dash Dashboard' }
    ]);

    this.router = router;
  }
}
