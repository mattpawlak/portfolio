$(document).ready(function() {
  $("html").on("submit","#contactForm",function(e){
    e.preventDefault();
    $("#send_form_status").html('').hide();
    var data=$("#contact_form").serialize();
    $.post("/contact.php",data,function(res){
      $("#send_form_status").html(res.msg).show();
      if(res.status==1){ 
        $("#contactForm")[0].reset();
      } 
    });
  });
});