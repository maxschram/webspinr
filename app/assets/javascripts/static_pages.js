$(document).ready(function () {
  $(".guest-login").on("click", function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();
    $("#email").val("guest");
    $("#password").val("password");
    $(".errors").empty();
    $(".login-form").submit();
  });

  $(".new-account").on("click", function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();
    $(".submit").html("Sign Up");
    $(".errors").empty();
    $("form").attr("action", "signup");
  });

  $(".login").on("click", function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();
    $(".errors").empty();
    $(".submit").html("Login");
    $("form").attr("action", "login");
  });
});
