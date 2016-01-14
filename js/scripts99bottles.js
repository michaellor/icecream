$(document).ready(function() {

     var bottles = 100;

     for(var index = 0; index <= 99; index += 1) {
       bottles = bottles-1;
       $("div").append('<li>' + bottles + ' bottles of beer on the wall' + bottles + ' bottles of beer. take one down, pass it around' + bottles + ' bottles of beer on the wall.' + '</li><br>');

     }
});
