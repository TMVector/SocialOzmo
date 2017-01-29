(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core/umd/Set", "fable-core/umd/GenericComparer", "fable-core/umd/Util", "fable-core/umd/Symbol", "fable-core/umd/List", "fable-core/umd/AsyncBuilder", "fable-core/umd/Async", "./pusher"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core/umd/Set"), require("fable-core/umd/GenericComparer"), require("fable-core/umd/Util"), require("fable-core/umd/Symbol"), require("fable-core/umd/List"), require("fable-core/umd/AsyncBuilder"), require("fable-core/umd/Async"), require("./pusher"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Set, global.GenericComparer, global.Util, global.Symbol, global.List, global.AsyncBuilder, global.Async, global.pusher);
    global.ozmo = mod.exports;
  }
})(this, function (exports, _Set, _GenericComparer, _Util, _Symbol2, _List, _AsyncBuilder, _Async, _pusher) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sub = exports.feed = exports.pusher = exports.appId = exports.shrink = exports.grow = exports.Blob = exports.ctx = exports.canvas = exports.atmosHeight = exports.floorHeight = exports.height = exports.width = exports.Keyboard = undefined;
  exports.drawGrd = drawGrd;
  exports.drawBg = drawBg;
  exports.drawText = drawText;
  exports.drawBlob = drawBlob;
  exports.direct = direct;
  exports.gravity = gravity;
  exports.bounce = bounce;
  exports.move = move;
  exports.step = step;
  exports.collide = collide;
  exports.absorb = absorb;
  exports.newDrop = newDrop;
  exports.newGrow = newGrow;
  exports.newShrink = newShrink;
  exports.updateDrops = updateDrops;
  exports.countDrops = countDrops;
  exports.game = game;
  exports.completed = completed;
  exports.update = update;

  var _GenericComparer2 = _interopRequireDefault(_GenericComparer);

  var _Symbol3 = _interopRequireDefault(_Symbol2);

  var _List2 = _interopRequireDefault(_List);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Keyboard = exports.Keyboard = function (__exports) {
    var keysPressed = (Object.defineProperty(__exports, 'keysPressed', {
      get: function get() {
        return keysPressed;
      },
      set: function set(x) {
        return keysPressed = x;
      }
    }), (0, _Set.create)(null, new _GenericComparer2.default(_Util.compare)));

    var code = __exports.code = function (x) {
      if (keysPressed.has(x)) {
        return 1;
      } else {
        return 0;
      }
    };

    var arrows = __exports.arrows = function () {
      return [code(39) - code(37), code(38) - code(40)];
    };

    var update = __exports.update = function (e, pressed) {
      var keyCode = ~~e.keyCode;
      var op = pressed ? function (value) {
        return function (set) {
          return (0, _Set.add)(value, set);
        };
      } : function (value_1) {
        return function (set_1) {
          return (0, _Set.remove)(value_1, set_1);
        };
      };
      keysPressed = op(keyCode)(keysPressed);
      return null;
    };

    var init = __exports.init = function () {
      window.addEventListener('keydown', function (e) {
        return update(e, true);
      });
      window.addEventListener('keyup', function (e_1) {
        return update(e_1, false);
      });
    };

    return __exports;
  }({});

  var width = exports.width = 900;
  var height = exports.height = 668;
  var floorHeight = exports.floorHeight = 100;
  var atmosHeight = exports.atmosHeight = 300;
  Keyboard.init();
  var canvas = exports.canvas = document.getElementsByTagName('canvas')[0];
  var ctx = exports.ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;

  function drawGrd(ctx_1, canvas_1, y0, y1, c0, c1) {
    var grd = ctx_1.createLinearGradient(0, y0, 0, y1);
    grd.addColorStop(0, c0);
    grd.addColorStop(1, c1);
    ctx_1.fillStyle = grd;
    ctx_1.fillRect(0, y0, canvas_1.width, y1 - y0);
  }

  function drawBg(ctx_1, canvas_1) {
    drawGrd(ctx_1, canvas_1, 0, atmosHeight, "yellow", "orange");
    drawGrd(ctx_1, canvas_1, atmosHeight, canvas_1.height - floorHeight, "grey", "white");
    ctx_1.fillStyle = "black";
    ctx_1.fillRect(0, canvas_1.height - floorHeight, canvas_1.width, floorHeight);
  }

  function drawText(text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "bold 40pt";
    ctx.fillText(text, x, y);
  }

  var Blob = exports.Blob = function () {
    function Blob(x, y, vx, vy, radius, color) {
      _classCallCheck(this, Blob);

      this.X = x;
      this.Y = y;
      this.vx = vx;
      this.vy = vy;
      this.Radius = radius;
      this.color = color;
    }

    _createClass(Blob, [{
      key: _Symbol3.default.reflection,
      value: function () {
        return {
          type: "Ozmo.Blob",
          interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
          properties: {
            X: "number",
            Y: "number",
            vx: "number",
            vy: "number",
            Radius: "number",
            color: "string"
          }
        };
      }
    }, {
      key: "Equals",
      value: function (other) {
        return (0, _Util.equalsRecords)(this, other);
      }
    }, {
      key: "CompareTo",
      value: function (other) {
        return (0, _Util.compareRecords)(this, other);
      }
    }]);

    return Blob;
  }();

  (0, _Symbol2.setType)("Ozmo.Blob", Blob);

  function drawBlob(ctx_1, canvas_1, blob) {
    ctx_1.beginPath();
    ctx_1.arc(blob.X, canvas_1.height - (blob.Y + floorHeight + blob.Radius), blob.Radius, 0, 2 * 3.141592653589793, false);
    ctx_1.fillStyle = blob.color;
    ctx_1.fill();
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = blob.color;
    ctx_1.stroke();
  }

  function direct(dx, dy, blob) {
    var vx = blob.vx + dx / 4;
    return new Blob(blob.X, blob.Y, vx, blob.vy, blob.Radius, blob.color);
  }

  function gravity(blob) {
    if (blob.Y > 0) {
      var vy = blob.vy - 0.1;
      return new Blob(blob.X, blob.Y, blob.vx, vy, blob.Radius, blob.color);
    } else {
      return blob;
    }
  }

  function bounce(blob) {
    var n = width;

    if (blob.X < 0) {
      var X = -blob.X;
      var vx = -blob.vx;
      return new Blob(X, blob.Y, vx, blob.vy, blob.Radius, blob.color);
    } else if (blob.X > n) {
      var X_1 = n - (blob.X - n);
      var vx_1 = -blob.vx;
      return new Blob(X_1, blob.Y, vx_1, blob.vy, blob.Radius, blob.color);
    } else {
      return blob;
    }
  }

  function move(blob) {
    return new Blob(blob.X + blob.vx, 0 > blob.Y + blob.vy ? 0 : blob.Y + blob.vy, blob.vx, blob.vy, blob.Radius, blob.color);
  }

  function step(dir_0, dir_1, blob) {
    var dir = [dir_0, dir_1];
    return bounce(move(direct(dir[0], dir[1], blob)));
  }

  function collide(a, b) {
    var dx = (a.X - b.X) * (a.X - b.X);
    var dy = (a.Y - b.Y) * (a.Y - b.Y);
    var dist = Math.sqrt(dx + dy);
    return dist < Math.abs(a.Radius - b.Radius);
  }

  function absorb(blob, drops) {
    return (0, _List.filter)(function (drop) {
      return !collide(blob, drop);
    }, drops);
  }

  var grow = exports.grow = "black";
  var shrink = exports.shrink = "white";

  function newDrop(color) {
    var X = Math.random() * width * 0.8 + width * 0.1;
    var Y = 600;
    var Radius = 10;
    return new Blob(X, Y, 0, 0, Radius, color);
  }

  function newGrow() {
    return newDrop(grow);
  }

  function newShrink() {
    return newDrop(shrink);
  }

  function updateDrops(drops, countdown) {
    if (countdown > 0) {
      return [drops, countdown - 1];
    } else if (Math.floor(Math.random() * 8) === 0) {
      var drop = Math.floor(Math.random() * 3) === 0 ? newGrow() : newShrink();
      return [new _List2.default(drop, drops), 8];
    } else {
      return [drops, countdown];
    }
  }

  function countDrops(drops) {
    var count = function count(color) {
      return (0, _List.filter)(function (drop) {
        return drop.color === color;
      }, drops).length;
    };

    return [count(grow), count(shrink)];
  }

  function game() {
    return function (builder_) {
      return builder_.Delay(function () {
        var blob = void 0;
        var X = 300;
        var Y = 0;
        var Radius = 50;
        blob = new Blob(X, Y, 0, 0, Radius, "black");
        return builder_.ReturnFrom(update(blob, (0, _List.ofArray)([newGrow()]), 0));
      });
    }(_AsyncBuilder.singleton);
  }

  function completed() {
    return function (builder_) {
      return builder_.Delay(function () {
        drawText("COMPLETED", 320, 300);
        return builder_.Bind((0, _Async.sleep)(10000), function () {
          return builder_.ReturnFrom(game());
        });
      });
    }(_AsyncBuilder.singleton);
  }

  function update(blob, drops, countdown) {
    return function (builder_) {
      return builder_.Delay(function () {
        var patternInput = updateDrops(drops, countdown);
        var patternInput_1 = countDrops(patternInput[0]);

        var drops_2 = function (drops_1) {
          return absorb(blob, drops_1);
        }((0, _List.map)(function ($var1) {
          return move(gravity($var1));
        }, patternInput[0]));

        var patternInput_2 = countDrops(drops_2);
        var drops_3 = (0, _List.filter)(function (blob_1) {
          return blob_1.Y > 0;
        }, drops_2);
        var radius = blob.Radius + (patternInput_1[0] - patternInput_2[0]) * 4;
        var radius_1 = radius - (patternInput_1[1] - patternInput_2[1]) * 4;
        var radius_2 = 5 > radius_1 ? 5 : radius_1;
        var blob_2 = new Blob(blob.X, blob.Y, blob.vx, blob.vy, radius_2, blob.color);

        var blob_4 = function () {
          var tupledArg = Keyboard.arrows();
          return function (blob_3) {
            return step(tupledArg[0], tupledArg[1], blob_3);
          };
        }()(blob_2);

        drawBg(ctx, canvas);
        return builder_.Combine(builder_.For(drops_3, function (_arg2) {
          drawBlob(ctx, canvas, _arg2);
          return builder_.Zero();
        }), builder_.Delay(function () {
          drawBlob(ctx, canvas, blob_4);

          if (blob_4.Radius > 150) {
            return builder_.ReturnFrom(completed());
          } else {
            return builder_.Bind((0, _Async.sleep)(~~(1000 / 60)), function () {
              return builder_.ReturnFrom(update(blob_4, drops_3, patternInput[1]));
            });
          }
        }));
      });
    }(_AsyncBuilder.singleton);
  }

  (function (arg00) {
    (0, _Async.startImmediate)(arg00);
  })(game());

  var appId = exports.appId = "e7861df8-5d11-462b-acb2-19a72a5335de";
  var pusher = exports.pusher = new _pusher.App(new _pusher.AppOptions(appId));
  var feed = exports.feed = pusher.feed("playground");
  var sub = exports.sub = feed.subscribe(new _pusher.FeedSubscribeOptions(null, function () {
    console.log("Connection established");
  }, function (item) {
    console.log("Item: ", item);
  }, function (error) {
    console.log("Error: ", error);
  }));
  feed.append("Hello, world!").then(function (response) {
    console.log("Success:", response);
    return Promise.resolve(null);
  }).catch(function (err) {
    console.error("Error:", err);
  });
  feed.append({
    yourKey: "your value"
  }).then(function (response) {
    console.log("Success:", response);
    return Promise.resolve(null);
  }).catch(function (err) {
    console.error("Error:", err);
  });
});
//# sourceMappingURL=ozmo.js.map