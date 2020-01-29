var UrlContent = window.location.href;
var Start = "Content=";
var Ene = "#";
var FilterContent = UrlContent.substring((UrlContent.indexOf(Start))+UrlContent.length, UrlContent.indexOf(End));
ViewContent.innerHTML = "FilterContent";
alert("FilterContent");
