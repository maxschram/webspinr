$(document).ready(function () {
  $(".guest-login").on("click", function (e) {
    e.preventDefault();
    $("#email").val("guest");
    $("#password").val("password");
    $(".login-form").submit();
  });
});
