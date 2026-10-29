// Preview only (never installed): a fake WSForm so index.html runs in a normal browser.
// Each method returns what the C# method writes to the result variable. Use made-up test data only.
(function () {
  var vars = {};
  var methods = {
    FX_Hello: function () { return { ok: true, message: "Hello from the preview stub." }; }
  };
  window.WSForm = {
    invoke: function () {
      var args = Array.prototype.slice.call(arguments);
      var name = args.shift();
      var cb = args.pop();
      setTimeout(function () {
        vars.FX_vAppResult = JSON.stringify(methods[name] ? methods[name].apply(null, args) : { ok: false, message: "Unknown method " + name + " (add it to preview/stub.js)" });
        cb(0);
      }, 300);
    },
    getVarValue: function (name, cb) { setTimeout(function () { cb(vars[name]); }, 50); }
  };
})();
