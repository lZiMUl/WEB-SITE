var GetUrl = window.location.href;
var Start = "Content=";
var End = GetUrl.indexOf("#");
var Content = GetUrl.substring((GetUrl.indexOf(Start))+Start.length,End);
alert(Content);
