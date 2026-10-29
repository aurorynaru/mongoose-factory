// Preview only (never installed): a fake WSForm so index.html runs in a normal browser.
// It mimics the C# methods' result shape in FX_vAsnResult. Data is generated test data.
(function () {
  var vars = {};
  var lookups = [
    ["ActivityType", "Delivery"], ["ActivityType", "TEST Activity 2"],
    ["DeptCode", "50 - Hardware"], ["DeptCode", "TEST Dept 2"],
    ["DeliveryMode", "TEST Mode 1"], ["DeliveryMode", "TEST Mode 2"],
    ["LocationCode", "TEST Loc 1"], ["LocationCode", "TEST Loc 2"],
    ["TruckType", "TEST Truck 1"], ["TruckType", "TEST Truck 2"]
  ].map(function (p) { return { Type: p[0], Value: p[1] }; });
  var asns = [];
  var seed = 7;
  function rnd(n) { seed = (seed * 9301 + 49297) % 233280; return Math.floor(seed / 233280 * n); }
  function pad(n, w) { var s = String(n); while (s.length < w) { s = "0" + s; } return s; }
  function ymd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1, 2) + "-" + pad(d.getDate(), 2); }
  var statuses = ["Approved", "Approved", "Approved", "Pending Approval", "Received", "Cancelled", "No Show"];
  var vdr = ["DC Received", "Intransit", "RDU Received", "Completed"];
  for (var i = 1; i <= 60; i++) {
    var month = i <= 12 ? 8 : 9;
    var d = new Date(2026, month, 1 + rnd(31));
    var st = statuses[rnd(statuses.length)];
    var hasVdr = st === "Approved" || st === "Received";
    asns.push({
      AsnId: i, AsnNum: "WAP" + pad(i, 9), VdrNum: hasVdr ? "VDR" + pad(12300 + i, 7) : "",
      EnvCode: "WAP", DeptCode: "50 - Hardware", DeliveryDate: ymd(d), BoxQty: 10 + rnd(20),
      VdrStatus: hasVdr ? vdr[rnd(4)] : "", AsnStatus: st, DocsPct: hasVdr ? 100 : 40 + rnd(60),
      CreatedDate: ymd(new Date(d.getTime() - 5 * 864e5))
    });
  }
  function next() { return asns.reduce(function (m, a) { return Math.max(m, a.AsnId); }, 0) + 1; }
  function save(json, generate) {
    var data = JSON.parse(json);
    var row = data.AsnId ? asns.filter(function (a) { return String(a.AsnId) === data.AsnId; })[0] : null;
    if (!row) { row = { AsnId: next(), EnvCode: "WAP", CreatedDate: ymd(new Date()) }; asns.push(row); }
    for (var k in data) { if (k !== "AsnId") { row[k] = data[k]; } }
    row.BoxQty = data.BoxQty === "" ? null : +data.BoxQty;
    row.AsnStatus = generate ? "Pending Approval" : "Draft";
    if (generate) {
      var max = asns.reduce(function (m, a) { return a.AsnNum ? Math.max(m, +a.AsnNum.slice(3)) : m; }, 0);
      row.AsnNum = "WAP" + pad(max + 1, 9);
    }
    return { ok: true, asnId: row.AsnId, asnNum: row.AsnNum || "", message: generate ? "ASN generated." : "Draft saved." };
  }
  var methods = {
    FX_LoadAsnData: function () { return { ok: true, asns: asns, lookups: lookups }; },
    FX_SaveAsnDraft: function (json) { return save(json, false); },
    FX_GenerateAsn: function (json) { return save(json, true); }
  };
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
