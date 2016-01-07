"use strict";
function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}var _createClass = function () {
  function e(e, n) {
    for (var a = 0; a < n.length; a++) {
      var t = n[a];t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
    }
  }return function (n, a, t) {
    return a && e(n.prototype, a), t && e(n, t), n;
  };
}(),
    func = function func() {
  var e = "jwright",
      n = "Smith",
      a = "Phil",
      t = function () {
    function e() {
      _classCallCheck(this, e);
    }return _createClass(e, [{ key: "getName", value: function value() {
        return n;
      } }, { key: "setName", value: function value(e) {
        n = e;
      } }]), e;
  }(),
      r = new t();r.setName("Jacob"), console.log("Real Name is:", a), console.log("Username is:", e), console.log("Other persons name is:", r.getName());
};func();

//# sourceMappingURL=main-compiled.js.map