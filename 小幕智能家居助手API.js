var GetUrl = window.location.href;
var Start = GetUrl.indexOf("Search=");
alert(Start)
var End = GetUrl.indexOf("#");
var Content = GetUrl.substring(Start+1,End);
alert(Content);
