(function () {

  var global = global || window || self || this;

  var nx = global.nx || require('next-js-core2');
  var NxctReduxBoot = nx.declare('nx.ctReduxBoot', {

  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxctReduxBoot;
  }

}());
