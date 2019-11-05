$(document).ready(function(){
  $(".img1").click(function(){
    $(".info1").show();
    $("img1").hide();
  });
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
function functiongmail(){
  var name = document.getElementById("name").value;
  var Email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == '' || email == '' || message == ''){
    alert('Please make sure you have filled in correctly');
  } else {
    alert ('Hi' + name + 'we have received your message. THank you for reaching out to us')
  }
}