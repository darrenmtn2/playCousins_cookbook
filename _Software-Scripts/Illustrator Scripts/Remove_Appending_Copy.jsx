// Generated by CoffeeScript 1.7.1
var SublayerHelper, sublayerHelper;

SublayerHelper = (function() {
  function SublayerHelper() {
    this.manageSublayers(app.activeDocument);
  }

  SublayerHelper.prototype.manageSublayers = function(root) {
    var layer, sublayer, _i, _len, _ref, _results;
    _ref = root.layers;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      layer = _ref[_i];
      _results.push((function() {
        var _j, _len1, _ref1, _results1;
        _ref1 = layer.layers;
        _results1 = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          sublayer = _ref1[_j];
          _results1.push(this.renameLayer(sublayer));
        }
        return _results1;
      }).call(this));
    }
    return _results;
  };

  SublayerHelper.prototype.renameLayer = function(layer) {
    var newName;
    newName = ""+ layer.name;
    newName = newName.replace(/\scopy\s?\d*$/i,'');
    return layer.name = newName;
  };

  return SublayerHelper;

})();

sublayerHelper = new SublayerHelper();
