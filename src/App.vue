<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyC6Q9DdoJaxb16slv6HCYTaGIR4mYicKyM",
    authDomain: "timecard-825d4.firebaseapp.com",
    databaseURL: "https://timecard-825d4.firebaseio.com",
    storageBucket: "timecard-825d4.appspot.com",
    messagingSenderId: "238310997956"
  };

let app = Firebase.initializeApp(config);
let db = app.database();
let booksRef = db.ref('books');

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
