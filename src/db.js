'use strict';

import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC6Q9DdoJaxb16slv6HCYTaGIR4mYicKyM",
  authDomain: "timecard-825d4.firebaseapp.com",
  databaseURL: "https://timecard-825d4.firebaseio.com",
  storageBucket: "timecard-825d4.appspot.com",
  messagingSenderId: "238310997956"
};

const app = Firebase.initializeApp(config);
const db = app.database();

export default db;