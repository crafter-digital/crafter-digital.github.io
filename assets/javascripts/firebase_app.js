var config = {
  apiKey: "AIzaSyD3Lc1ApIsvut9PeogfjhXDoXXIAiqAic8",
  authDomain: "crafter-digital-website.firebaseapp.com",
  databaseURL: "https://crafter-digital-website.firebaseio.com",
  projectId: "crafter-digital-website",
  storageBucket: "crafter-digital-website.appspot.com",
  messagingSenderId: "787201684265"
};
firebase.initializeApp(config);

// Get a reference to the database service
var rootRef = firebase.database().ref().child('visitors');

function writeVisitors(uid, name, email, phone_number, message, service) {
  var database_ref = firebase.database().ref('visitors/' + uid);

  database_ref.set({
    uid: uid,
    name: name,
    email: email,
    phone_number: phone_number,
    message: message,
    service: service
  });

  database_ref.once('value', function(snapshot) {
    if (snapshot.val() != null) {
      clearForm();
    }
  });

  firebase.database().ref().child('visitors').push().key;
}