const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');
const {admin, db} = require('./middleware/admin');
const FBAuth = require('./middleware/fbAuth');

const {createProduct} = require('./routes/products')
const {createElement, getAllElements} = require('./routes/elements')

app.use(cors({ origin: true }));
app.get('/hola',FBAuth, (req, res)=>{
    return res.status(400).json({msg: "hola"})
})

app.get('/elements', FBAuth, getAllElements);

app.post('/elements', FBAuth, createElement);

app.post('/products', FBAuth, createProduct);

exports.createElementTrigger = functions
  .firestore.document('elements/{id}')
  .onCreate((snapshot) => {
    console.log(snapshot)
    return db
      .doc(`/elements/${snapshot.data().id}`)
      .get()
      .then((doc) => {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString()
          });
        }
      )
      .catch((err) => {
        console.error(err);
        return;
      });
  });

  exports.api = functions.https.onRequest(app);