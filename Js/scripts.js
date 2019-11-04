jQuery('form#form1').submit(function (event) {
  event.preventDefault();
  var userName = document.getElementById('name').value;
  alert(userName + ' we have received your message. Thank you for reaching out to us.');
  jQuery('#contact-form')[0].reset();
// document.getElementById('contact-form').reset();
})

