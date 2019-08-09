document.onreadystatechange = function () {
  // if (document.readyState == "complete") {
  //   document.getElementById("submit-contact-form").addEventListener("click", function () {
  //     var email = document.getElementById("contact-email").value;
  //     var uid = Math.floor(Date.now() / 1000);
  //     writeVisitors(uid, '', email, '', '', '');
  //   });
  // }
}

function clearForm() {
  document.getElementById("contact-email").value = '';
}