const admin = require('firebase-admin');

//Esto es necesario para que las funciones anden desde firebase serve
// https://firebase.google.com/docs/admin/setup?authuser=0#initialize_the_sdk
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

module.exports = { admin, db };