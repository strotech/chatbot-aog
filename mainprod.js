require('app-module-path').addPath(__dirname);
const functions = require('firebase-functions')
const app = require('src/app')

exports.app = functions.https.onRequest(app)