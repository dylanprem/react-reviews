const admin = require("firebase-admin");
const { keys } = require("../serviceAccountKey");

function initFirebase() {
  admin.initializeApp({
    credential: admin.credential.cert(keys),
    apiKey: process.env.API_KEY,
    authDomain: "react-reviews-project-1ecec.firebaseapp.com",
    projectId: "react-reviews-project-1ecec",
    storageBucket: "react-reviews-project-1ecec.appspot.com",
    messagingSenderId: "348417196542",
    appId: process.env.APP_ID,
    databaseURL:
      "https://react-reviews-project-1ecec-default-rtdb.firebaseio.com",
  });
}

module.exports = { initFirebase };
