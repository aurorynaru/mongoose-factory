// Preview only (never installed): a fake WSForm so index.html runs in a normal browser.
// It mimics FX_ASNPortal.cs.txt's result shape (WM data, BLD-002). Data is generated test data.
(function () {
  var vars = {};
  var lookups = [["ActivityType", "delivery"], ["DeptCode", "50"], ["DeliveryMode", "VIA DC"], ["TruckType", "4W"], ["LocationCode", "STAGE"]]
    .map(function (p) { return { Type: p[0], Value: p[1] }; });
  var asns = [];
  var seed = 7;
  function rnd(n) { seed = (seed * 9301 + 49297) % 233280; return Math.floor(seed / 233280 * n); }
  function pad(n, w) { var s = String(n); while (s.length < w) { s = "0" + s; } return s; }
  function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1, 2) + "-" + pad(d.getDate(), 2) + "T11:00:00.000+00:00"; }
  for (var i = 1; i <= 30; i++) {
    var d = new Date(2026, 9, 1 + rnd(31));
    asns.push({ AsnNum: pad(370 + i, 10), ExternKey: "FXTEST-" + pad(i, 4), Storer: "MINISO", WmStatus: "0", AsnStatus: "Pending Approval",
      DeliveryDate: iso(d), CreatedDate: iso(new Date(2026, 9, 29, 6, i)) });
  }
  function shape() {
    asns.sort(function (a, b) { return b.CreatedDate.localeCompare(a.CreatedDate); });
    asns.forEach(function (a, idx) {
      a.AsnId = idx;
      if (idx < 6 && !a.DeptCode) { a.DeptCode = "50"; a.EnvCode = "WAP"; a.BoxQty = String(1 + rnd(30)); }
    });
    return { ok: true, asns: asns, lookups: lookups };
  }
  function generate(json) {
    var data = JSON.parse(json);
    var lines = JSON.parse(data.Lines || "[]");
    for (var i = 0; i < lines.length; i++) {
      if (!items.hasOwnProperty(lines[i].Sku)) { return { ok: false, message: "SKU " + lines[i].Sku + " was not found in WM (owner MINISO)." }; }
    }
    var key = pad(370 + asns.length + 1, 10);
    asns.push({ AsnNum: key, ExternKey: "WMS" + key, Storer: "MINISO", WmStatus: "0", AsnStatus: "Pending Approval",
      DeliveryDate: data.DeliveryDate + "T11:00:00.000+00:00", CreatedDate: new Date().toISOString(),
      DeptCode: data.DeptCode, EnvCode: "WAP", BoxQty: data.BoxQty });
    return { ok: true, asnNum: key, message: "ASN " + key + " created in WM warehouse 1." };
  }
  // Preview-only item list; the real check calls WM (FX_CheckSku).
  var items = { MNSSKU1: "Preview item 1", MNSSKU2: "Preview item 2" };
  function checkSku(sku) {
    sku = String(sku || "").trim();
    return { ok: true, found: items.hasOwnProperty(sku), sku: sku, descr: items[sku] || "" };
  }
  var methods = { FX_LoadAsnData: shape, FX_GenerateAsn: generate, FX_CheckSku: checkSku };
  window.WSForm = {
    invoke: function () {
      var args = Array.prototype.slice.call(arguments);
      var name = args.shift();
      var cb = args.pop();
      setTimeout(function () {
        vars.FX_vAsnResult = JSON.stringify(methods[name] ? methods[name].apply(null, args) : { ok: false, message: "Unknown method " + name });
        cb(0);
      }, 300);
    },
    getVarValue: function (name, cb) { setTimeout(function () { cb(vars[name]); }, 50); }
  };
})();
