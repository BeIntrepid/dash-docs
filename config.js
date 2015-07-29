System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "lib/*.js",
    "lodash": "jspm_packages/npm/lodash@3.10.0.js",
    "backbone": "jspm_packages/npm/backbone@1.2.1.js"
  }
});

System.config({
  "map": {
    "aurelia-animator-css": "github:aurelia/animator-css@0.13.0",
    "aurelia-binding": "github:aurelia/binding@0.8.2",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
    "aurelia-framework": "github:aurelia/framework@0.13.3",
    "aurelia-history": "github:aurelia/history@0.6.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
    "aurelia-http-client": "github:aurelia/http-client@0.10.0",
    "aurelia-loader": "github:aurelia/loader@0.8.2",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
    "aurelia-logging": "github:aurelia/logging@0.6.1",
    "aurelia-metadata": "github:aurelia/metadata@0.7.0",
    "aurelia-path": "github:aurelia/path@0.8.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
    "aurelia-router": "github:aurelia/router@0.10.2",
    "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
    "aurelia-templating": "github:aurelia/templating@0.13.11",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.1",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.1",
    "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
    "babel": "npm:babel-core@5.8.12",
    "babel-runtime": "npm:babel-runtime@5.8.12",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "dash-component": "github:beintrepid/dash-component@0.0.6",
    "dash-core": "github:beintrepid/dash-core@0.0.6",
    "dash-github": "github:beintrepid/dash-github@0.0.6",
    "dash-transform": "github:beintrepid/dash-transform@0.0.6",
    "dash-transform-vis": "github:beintrepid/dash-transform-vis@0.0.6",
    "font-awesome": "npm:font-awesome@4.3.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:aurelia/animator-css@0.13.0": {
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/binding@0.8.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-framework": "github:aurelia/framework@0.13.3",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.2",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.1",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.1"
    },
    "github:aurelia/framework@0.13.3": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.1": {
      "aurelia-history": "github:aurelia/history@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.0": {
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0"
    },
    "github:aurelia/loader@0.8.2": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/templating-resources@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-router": "github:aurelia/router@0.10.2",
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/templating@0.13.11": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:beintrepid/dash-component@0.0.4": {
      "dash-core": "github:beintrepid/dash-core@0.0.3"
    },
    "github:beintrepid/dash-component@0.0.5": {
      "dash-core": "github:beintrepid/dash-core@0.0.3"
    },
    "github:beintrepid/dash-component@0.0.6": {
      "dash-core": "github:beintrepid/dash-core@0.0.6"
    },
    "github:beintrepid/dash-github@0.0.1": {
      "dash-component": "github:beintrepid/dash-component@0.0.5",
      "dash-transform": "github:beintrepid/dash-transform@0.0.4",
      "linq-es6": "npm:linq-es6@0.2.1"
    },
    "github:beintrepid/dash-github@0.0.6": {
      "dash-component": "github:beintrepid/dash-component@0.0.6",
      "dash-transform": "github:beintrepid/dash-transform@0.0.6",
      "linq-es6": "npm:linq-es6@0.2.1"
    },
    "github:beintrepid/dash-transform-vis@0.0.4": {
      "backbone": "npm:backbone@1.2.1",
      "dash-transform": "github:beintrepid/dash-transform@0.0.4",
      "jointjs": "npm:jointjs@0.9.4",
      "linq-es6": "npm:linq-es6@0.2.1",
      "lodash": "npm:lodash@3.10.0"
    },
    "github:beintrepid/dash-transform-vis@0.0.6": {
      "backbone": "npm:backbone@1.2.1",
      "dash-transform": "github:beintrepid/dash-transform@0.0.6",
      "jointjs": "npm:jointjs@0.9.4",
      "linq-es6": "npm:linq-es6@0.2.1",
      "lodash": "npm:lodash@3.10.0"
    },
    "github:beintrepid/dash-transform@0.0.2": {
      "jquery": "github:components/jquery@2.1.4",
      "linq-es6": "npm:linq-es6@0.2.1"
    },
    "github:beintrepid/dash-transform@0.0.4": {
      "jquery": "github:components/jquery@2.1.4",
      "linq-es6": "npm:linq-es6@0.2.1"
    },
    "github:beintrepid/dash-transform@0.0.6": {
      "jquery": "github:components/jquery@2.1.4",
      "linq-es6": "npm:linq-es6@0.2.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.8.12": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:backbone@1.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:dagre@0.7.1": {
      "graphlib": "npm:graphlib@1.0.1",
      "lodash": "npm:lodash@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "npm:graphlib@1.0.1": {
      "lodash": "npm:lodash@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jointjs@0.9.4": {
      "backbone": "npm:backbone@1.2.1",
      "dagre": "npm:dagre@0.7.1",
      "graphlib": "npm:graphlib@1.0.1",
      "jquery": "npm:jquery@2.1.3",
      "lodash": "npm:lodash@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jquery@2.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@2.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@2.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

