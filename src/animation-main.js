export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');

    // This breaks because it tries to load html for the module path. Not sure why even with no globalizeresources call
    //.plugin('dash-component');

  aurelia.start().then(a => a.setRoot());
}
