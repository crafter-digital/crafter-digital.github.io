var form_popup = document.getElementById('form_popup');
var email_input = document.getElementById('contact_email_input');

function getEmail() {
  var email = document.getElementById('contact_email');
  email = (email == null) ? email_input : email;
  return email;
}

function clearForm() {
  getEmail().value = '';
  document.getElementById("contact_name").value = '';
  document.getElementById("contact_company_name").value = '';
  document.getElementById("contact_phone_number").value = '';
  document.getElementById("contact_message").value = '';
}

function closePopup() {
  clearForm();
  form_popup.style.display = 'none';
}

function closeSuccessPopup() {
  document.getElementById('success_popup').style.display = 'none';
}

function showPopup() {
  form_popup.style.display = 'block';
  if (getEmail().id == 'contact_email') {
    email_input.required = false;
    email_input.style.display = 'none';
  }
}

function submitFormContact() {
  var email = getEmail().value;
  var name = document.getElementById("contact_name").value;
  var phone_number = document.getElementById("contact_phone_number").value;
  var company_name = document.getElementById("contact_company_name").value;
  var message = document.getElementById("contact_message").value;
  var services = document.getElementsByName("service");
  var selected_service = '';
  if (services) {
    for (var i = 0; i < services.length; i++) {
      if (services[i].checked){
        selected_service = services[i].value;
      }
    }
  }
  var uid = Math.floor(Date.now() / 1000);
  writeContacts(uid, name, email, phone_number, company_name, message, selected_service);
}