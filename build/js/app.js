!function t(n,o,e){function r(u,l){if(!o[u]){if(!n[u]){var s="function"==typeof require&&require;if(!l&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var f=o[u]={exports:{}};n[u][0].call(f.exports,function(t){var o=n[u][1][t];return r(o||t)},f,f.exports,t,n,o,e)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<e.length;u++)r(e[u]);return r}({1:[function(t,n,o){function e(t,n){this.title=t,this.entry=n}e.prototype.countWords=function(t){return t.split(" ").length},e.prototype.countVowels=function(t){var n=0,o=["a","e","i","o","u"],e=t.split(" ").join("").toLowerCase().split("");for(i=0;i<e.length;i++)o.indexOf(e[i])>=0&&(n+=1);return n},e.prototype.countConsonants=function(t){var n=0,o=["a","e","i","o","u"],e=t.split(" ").join("").toLowerCase().split("");for(console.log(e),i=0;i<e.length;i++)o.indexOf(e[i])<0&&(n+=1);return n},e.prototype.teaser=function(t){var n=t.split(" "),o="",e=n.length;if(console.log(e),e>=8){for(i=0;i<8;i++)o=o.concat(n[i]," ");o+="..."}else o=t;return o},o.journalModule=e},{}],2:[function(t,n,o){var e=t("./../js/journal.js").journalModule;$(document).ready(function(){$("#journal").submit(function(t){t.preventDefault();var n=$("#title").val(),o=$("#entry").val(),r=new e(n,o),i=r.teaser(o),u=r.countWords(o),l=r.countVowels(o),s=r.countConsonants(o);r.teaser(o);$("#entries").prepend("<p>Entry Title: "+n+"<br>Entry text: "+i+"</p><ul><li>Vowel Count: "+l+"<li>Consonant Count: "+s+"<li>Word Count: "+u)})}),$(document).ready(function(){$("#time").text(moment())})},{"./../js/journal.js":1}]},{},[2]);