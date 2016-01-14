$(document).ready(function() {

     var flavors = ["vanilla", "chocolate", "strawberry"];

    //  flavors.forEach(function(flavor) {
    // $("div#flavor").append("<li>" + flavor + "</li>");
    //  });

     for(var index = 0; index < flavors.length; index += 1) {
       $("div#flavor").append("<li>" + flavors + "</li>")
     }

});
