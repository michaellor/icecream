$(document).ready(function() {

     var flavors = ["vanilla", "chocolate", "strawberry"];

     flavors.forEach(function(flavor) {
    $("div#flavor").append("<li>" + flavor + "</li>");
     });

});
