const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');
app.use(cors());

exports.api = functions.https.onRequest(app);
