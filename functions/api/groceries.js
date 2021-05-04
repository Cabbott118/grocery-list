const { db } = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');
firebase.initializeApp(config);

// GET
exports.getGroceries = (request, response) => {
  db.collection('groceries')
    .get()
    .then((data) => {
      let groceries = [];
      data.forEach((doc) => {
        groceries.push({
          groceryId: doc.id,
          name: doc.data().name,
        });
      });
      return response.json(groceries);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};

// POST
exports.postGrocery = (request, response) => {
  if (request.body.name.trim() === '') {
    return response.status(400).json({ body: 'Please enter something to add' });
  }

  const newGroceryItem = {
    name: request.body.name,
    createdAt: new Date().toISOString(),
  };

  db.collection('groceries')
    .add(newGroceryItem)
    .then((data) => {
      const resNewGroceryItem = newGroceryItem;
      resNewGroceryItem.groceryId = data.id;
      response.json(resNewGroceryItem);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};

// DELETE
exports.deleteGrocery = (request, response) => {
  const document = db.doc(`/groceries/${request.params.groceryId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: 'Item not found' });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: 'Item deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
