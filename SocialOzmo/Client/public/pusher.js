(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "fable-core/umd/Symbol", "fable-core/umd/Util"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("fable-core/umd/Symbol"), require("fable-core/umd/Util"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Symbol, global.Util);
        global.pusher = mod.exports;
    }
})(this, function (exports, _Symbol2, _Util) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = exports.AppOptions = exports.FeedsHelper = exports.FeedsGetOptions = exports.FeedSubscribeOptions = exports.AuthServerAuthorizer = exports.SimpleTokenAuthorizer = exports.BaseClient = exports.Subscription = exports.ErrorResponse = exports.SubscribeOptions = undefined;

    var _Symbol3 = _interopRequireDefault(_Symbol2);

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

    var SubscribeOptions = exports.SubscribeOptions = function () {
        _createClass(SubscribeOptions, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.SubscribeOptions",
                    nullable: true,
                    properties: {
                        headers: (0, _Util.Option)(_Util.Any),
                        jwt: (0, _Util.Option)("string"),
                        onEnd: (0, _Util.Option)("function"),
                        onError: (0, _Util.Option)("function"),
                        onEvent: (0, _Util.Option)("function"),
                        onOpen: (0, _Util.Option)("function"),
                        path: "string"
                    }
                };
            }
        }]);

        function SubscribeOptions(path, jwt, headers) {
            _classCallCheck(this, SubscribeOptions);

            this["path@29"] = path;
            this["jwt@29"] = jwt;
            this["headers@29"] = headers;
        }

        _createClass(SubscribeOptions, [{
            key: "path",
            get: function () {
                return this["path@29"];
            }
        }, {
            key: "jwt",
            get: function () {
                return this["jwt@29"];
            }
        }, {
            key: "headers",
            get: function () {
                return this["headers@29"];
            }
        }, {
            key: "onOpen",
            get: function () {
                return null;
            }
        }, {
            key: "onEvent",
            get: function () {
                return null;
            }
        }, {
            key: "onEnd",
            get: function () {
                return null;
            }
        }, {
            key: "onError",
            get: function () {
                return null;
            }
        }]);

        return SubscribeOptions;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.SubscribeOptions", SubscribeOptions);

    var ErrorResponse = exports.ErrorResponse = function () {
        _createClass(ErrorResponse, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.ErrorResponse",
                    nullable: true,
                    properties: {
                        headers: _Util.Any,
                        info: _Util.Any,
                        statusCode: "number"
                    }
                };
            }
        }]);

        function ErrorResponse(xhr) {
            _classCallCheck(this, ErrorResponse);
        }

        _createClass(ErrorResponse, [{
            key: "statusCode",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "headers",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "info",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return ErrorResponse;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.ErrorResponse", ErrorResponse);

    var Subscription = exports.Subscription = function () {
        _createClass(Subscription, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.Subscription",
                    nullable: true,
                    properties: {
                        calledOnOpen: "boolean",
                        gotEOS: "boolean",
                        lastNewlineIndex: "number"
                    }
                };
            }
        }]);

        function Subscription(xhr, options) {
            _classCallCheck(this, Subscription);
        }

        _createClass(Subscription, [{
            key: "opened",
            value: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "open",
            value: function (jwt) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "onChunk",
            value: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "onMessage",
            value: function (message) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "onEventMessage",
            value: function (eventMessage) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "onEOSMessage",
            value: function (eosMessage) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "abort",
            value: function (err) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "gotEOS",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "calledOnOpen",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "lastNewlineIndex",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return Subscription;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.Subscription", Subscription);

    var BaseClient = exports.BaseClient = function () {
        _createClass(BaseClient, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.BaseClient",
                    nullable: true,
                    properties: {
                        XMLHttpRequest: _Util.Any,
                        baseURL: "string"
                    }
                };
            }
        }]);

        function BaseClient(options) {
            _classCallCheck(this, BaseClient);
        }

        _createClass(BaseClient, [{
            key: "request",
            value: function (options) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "newSubscription",
            value: function (subOptions) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "createXHR",
            value: function (baseURL, options) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "baseURL",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "XMLHttpRequest",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return BaseClient;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.BaseClient", BaseClient);

    var SimpleTokenAuthorizer = exports.SimpleTokenAuthorizer = function () {
        _createClass(SimpleTokenAuthorizer, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.SimpleTokenAuthorizer",
                    nullable: true,
                    interfaces: ["G.PusherPlatform.Authorizer"],
                    properties: {}
                };
            }
        }]);

        function SimpleTokenAuthorizer(jwt) {
            _classCallCheck(this, SimpleTokenAuthorizer);
        }

        _createClass(SimpleTokenAuthorizer, [{
            key: "authorize",
            value: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return SimpleTokenAuthorizer;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.SimpleTokenAuthorizer", SimpleTokenAuthorizer);

    var AuthServerAuthorizer = exports.AuthServerAuthorizer = function () {
        _createClass(AuthServerAuthorizer, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.AuthServerAuthorizer",
                    nullable: true,
                    interfaces: ["G.PusherPlatform.Authorizer"],
                    properties: {
                        accessToken: "string"
                    }
                };
            }
        }]);

        function AuthServerAuthorizer(authServerUrl) {
            _classCallCheck(this, AuthServerAuthorizer);
        }

        _createClass(AuthServerAuthorizer, [{
            key: "authorize",
            value: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "accessToken",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return AuthServerAuthorizer;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.AuthServerAuthorizer", AuthServerAuthorizer);

    var FeedSubscribeOptions = exports.FeedSubscribeOptions = function () {
        _createClass(FeedSubscribeOptions, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.FeedSubscribeOptions",
                    nullable: true,
                    properties: {
                        lastEventId: (0, _Util.Option)("string"),
                        onError: (0, _Util.Option)("function"),
                        onItem: (0, _Util.Option)("function"),
                        onOpen: (0, _Util.Option)("function")
                    }
                };
            }
        }]);

        function FeedSubscribeOptions(lastEventId, onOpen, onItem, onError) {
            _classCallCheck(this, FeedSubscribeOptions);

            this["lastEventId@84"] = lastEventId;
            this["onOpen@84"] = onOpen;
            this["onItem@84"] = onItem;
            this["onError@84"] = onError;
        }

        _createClass(FeedSubscribeOptions, [{
            key: "lastEventId",
            get: function () {
                return this["lastEventId@84"];
            }
        }, {
            key: "onOpen",
            get: function () {
                return this["onOpen@84"];
            }
        }, {
            key: "onItem",
            get: function () {
                return this["onItem@84"];
            }
        }, {
            key: "onError",
            get: function () {
                return this["onError@84"];
            }
        }]);

        return FeedSubscribeOptions;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.FeedSubscribeOptions", FeedSubscribeOptions);

    var FeedsGetOptions = exports.FeedsGetOptions = function () {
        _createClass(FeedsGetOptions, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.FeedsGetOptions",
                    nullable: true,
                    properties: {
                        fromId: (0, _Util.Option)("string"),
                        limit: (0, _Util.Option)("number")
                    }
                };
            }
        }]);

        function FeedsGetOptions(fromId, limit) {
            _classCallCheck(this, FeedsGetOptions);

            this["fromId@90"] = fromId;
            this["limit@90"] = limit;
        }

        _createClass(FeedsGetOptions, [{
            key: "fromId",
            get: function () {
                return this["fromId@90"];
            }
        }, {
            key: "limit",
            get: function () {
                return this["limit@90"];
            }
        }]);

        return FeedsGetOptions;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.FeedsGetOptions", FeedsGetOptions);

    var FeedsHelper = exports.FeedsHelper = function () {
        _createClass(FeedsHelper, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.FeedsHelper",
                    nullable: true,
                    properties: {
                        app: App,
                        feedName: "string"
                    }
                };
            }
        }]);

        function FeedsHelper(name, app) {
            _classCallCheck(this, FeedsHelper);
        }

        _createClass(FeedsHelper, [{
            key: "subscribe",
            value: function (options) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "get",
            value: function (options) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "append",
            value: function (item) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "app",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "feedName",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return FeedsHelper;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.FeedsHelper", FeedsHelper);

    var AppOptions = exports.AppOptions = function () {
        _createClass(AppOptions, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.AppOptions",
                    properties: {
                        appId: "string",
                        authorizer: (0, _Util.Option)((0, _Util.Interface)("G.PusherPlatform.Authorizer")),
                        client: (0, _Util.Option)(BaseClient),
                        cluster: (0, _Util.Option)("string"),
                        encrypted: (0, _Util.Option)("boolean")
                    }
                };
            }
        }]);

        function AppOptions(appId, cluster, authorizer, client, encrypted) {
            _classCallCheck(this, AppOptions);

            this["appId@101"] = appId;
            this["cluster@101"] = cluster;
            this["authorizer@101"] = authorizer;
            this["client@101"] = client;
            this["encrypted@101"] = encrypted;
        }

        _createClass(AppOptions, [{
            key: "appId",
            get: function () {
                return this["appId@101"];
            }
        }, {
            key: "cluster",
            get: function () {
                return this["cluster@101"];
            }
        }, {
            key: "authorizer",
            get: function () {
                return this["authorizer@101"];
            }
        }, {
            key: "client",
            get: function () {
                return this["client@101"];
            }
        }, {
            key: "encrypted",
            get: function () {
                return this["encrypted@101"];
            }
        }]);

        return AppOptions;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.AppOptions", AppOptions);

    var App = exports.App = function () {
        _createClass(App, [{
            key: _Symbol3.default.reflection,
            value: function () {
                return {
                    type: "G.PusherPlatform.App",
                    nullable: true,
                    properties: {
                        appId: "string",
                        authorizer: (0, _Util.Interface)("G.PusherPlatform.Authorizer"),
                        client: BaseClient
                    }
                };
            }
        }]);

        function App(options) {
            _classCallCheck(this, App);
        }

        _createClass(App, [{
            key: "request",
            value: function (options) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "subscribe",
            value: function (options) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "feed",
            value: function (name) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "absPath",
            value: function (relativePath) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "client",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "appId",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }, {
            key: "authorizer",
            get: function () {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            },
            set: function (v) {
                throw new Error("A function supposed to be replaced by JS native code has been called, please check.");
            }
        }]);

        return App;
    }();

    (0, _Symbol2.setType)("G.PusherPlatform.App", App);
});
//# sourceMappingURL=pusher.js.map