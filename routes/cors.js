const express = require('express');
const cors = require('cors');
const app = express();

const whilteList = ['http://localhost:3000', 'https://localhost:3443'];
var corsOptionsDelegate = (req, callBack) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whilteList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }callBack(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);