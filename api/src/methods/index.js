// index methods

const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

var methods = {
        middleware: function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, Bearer');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            next();
        },
        root: function(req, res) {
            return res.send('Hello from Recast!');
        },
        apiRoot: function(req, res) {
            return res.send('You are at the nexus of the Recast API.');
        }
    };

// export

module.exports = methods;