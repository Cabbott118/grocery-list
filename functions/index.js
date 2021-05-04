const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');
app.use(cors());

const { getGroceries, postGrocery, deleteGrocery } = require('./api/groceries');

// Grocery Routes
app.get('/groceries', getGroceries);
app.post('/postGrocery', postGrocery);
app.delete('/grocery/:groceryId', deleteGrocery);

exports.api = functions.https.onRequest(app);
