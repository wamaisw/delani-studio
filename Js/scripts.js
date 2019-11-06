$(document).ready(function(){
  $(".img1").click(function(){
    $(".info1").show();
    $("img1").hide();
  b});
  $(".img1").click(function(){
    $(".img1").hide();
  });
  $(".info1").click(function(){
    $(".img1").show();
  });
  $(".info1").click(function(){
    $(".info1").hide();
  });
  $(".img2").click(function(){
    $(".info2").show();
  });
  $(".img2").click(function(){
    $(".img2").hide();
  });
  $(".info2").click(function(){
    $(".img2").show();
  });
  $(".info2").click(function(){
    $(".info2").hide();
  });
  $(".img3").click(function(){
    $(".info3").show();
  });
  $(".img3").click(function(){
    $(".img3").hide();
  });
  $(".info3").click(function(){
    $(".img3").show();
  });
  $(".info3").click(function(){
    $(".info3").hide();
  });
});
$(document).ready(function(){$('#submit').click(function () {
  var name = $('#name').val();
  var Email = $('#email').val();
  var Message = $('#message');
  event.preventDefault();
  if (name == '' || Email == '' || Message == '' ){
    alert('Please make sure you have filled in correctly ');
  } else {
    alert (' Hi '+ name + ' we have received your message. Thank you for reaching out to us.');
  }});
  });