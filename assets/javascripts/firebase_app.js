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
var rootRef = firebase.database().ref().child('contacts');

function writeContacts(uid, name, email, phone_number, company_name, message, service) {
  var database_ref = firebase.database().ref('contacts/' + uid);

  database_ref.set({
    uid: uid,
    name: name,
    email: email,
    phone_number: phone_number,
    company_name: company_name,
    message: message,
    service: service
  });

  database_ref.once('value', function(snapshot) {
    if (snapshot.val() != null) {
      document.getElementById('close_button').click();
      document.getElementById('success_popup').style.display = "block";
    }
  });

  firebase.database().ref().child('contacts').push().key;
}
