var GetUrl = window.location.href;
var Start = "Content=";
var End = "#";
var Content = GetUrl.substring((GetUrl.indexOf(Start))+Start.length, GetUrl.indexOf(End));
alert(Content);
