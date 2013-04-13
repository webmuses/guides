$(document).ready(function() {
  $("code.sh, code.bat").closest('.highlight').before('<i class="icon-small-prompt"></i>');
  $("code.erb, code.html, code.ruby, code.css").closest('.highlight').before('<i class="icon-small-text-editor"></i>');
  $("code.browser").closest('.highlight').before('<i class="icon-small-browser"></i>');

  $(".os-specific").append("<span class='picker'>Choose your operating system: <a href='#' class='win-link'>Windows</a> <a href='#' class='nix-link'>Other</a></span>").find(".win-link").click(function(event) {
    event.preventDefault();
    $.cookie("os", "win", { expires: 1825, path: '/' }); // expires in 5 years

    $(".os-specific .win-link").addClass("active").siblings().removeClass("active");
    $(".os-specific").children("div").hide().filter(".win").show();
  }).end().find(".nix-link").click(function(event) {
    event.preventDefault();
    $.cookie("os", "nix", { expires: 1825, path: '/' }); // expires in 5 years

    $(".os-specific .nix-link").addClass("active").siblings().removeClass("active");
    $(".os-specific").children("div").hide().filter(".nix").show();
  })

  var osFromCookie = $.cookie("os");
  if(osFromCookie) {
    $(".os-specific").find("." + osFromCookie + "-link").click();
  } else {
    $(".os-specific").find(".win-link").click();
  }
});
