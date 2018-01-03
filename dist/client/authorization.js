'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _safeBuffer = require('safe-buffer');

var key = void 0;

var initAuthorization = function initAuthorization(credentials) {
    if (credentials.accessToken) key = 'OAuth ' + credentials.accessToken;else if (credentials.token && credentials.key) key = 'Basic ' + new _safeBuffer.Buffer(credentials.token + ':' + credentials.key).toString('base64');else throw Error('You must provide either an `accessToken` or your `token` with the corresponding `key`.');

    console.log('\n', key);
};

var get = function get() {
    return key;
};

exports.default = {
    initAuthorization: initAuthorization,
    get: get
};