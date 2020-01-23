var form_popup = document.getElementById('form_popup');
var form_popup_overlay = document.getElementsByClassName('overlay')[0];
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
  form_popup_overlay.style.display = 'none';
  document.getElementsByClassName('services')[0].style.display = "block";
  document.getElementsByClassName('why_choose_us')[0].style.display = "block";
  document.getElementsByClassName('clients')[0].style.display = "grid";
  document.getElementsByClassName('testimonial')[0].style.display = "grid";
  document.getElementsByClassName('footer-wrapper')[0].style.display = "block";
}

function closeSuccessPopup() {
  document.getElementById('success_popup').style.display = 'none';
}

function showPopup() {
  form_popup.style.display = 'grid';
  form_popup_overlay.style.display = 'block';
  if (getEmail().id == 'contact_email') {
    email_input.required = false;
    email_input.style.display = 'none';
  }
  document.getElementsByClassName('services')[0].style.display = "none";
  document.getElementsByClassName('why_choose_us')[0].style.display = "none";
  document.getElementsByClassName('clients')[0].style.display = "none";
  document.getElementsByClassName('testimonial')[0].style.display = "none";
  document.getElementsByClassName('footer-wrapper')[0].style.display = "none";
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