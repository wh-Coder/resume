/**
 * Created by Administrator on 2017-04-01.
 */

var plugin = {};
plugin.install = function(Vue) {
  if (plugin.installed) {
    return;
  }
  var get = function(a){console.log('Hello  ' +a)}
  Vue.prototype.who = get;
  Object.defineProperties(Vue.prototype, {
    $who: {
      get() {
        return {get:get}
      }
    }
  });
  Vue.mixin({
    mounted: function () {
      console.log('Plugin activiated')
    }
  })
};

export default plugin;
// module.exports = plugin;
