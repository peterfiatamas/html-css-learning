$(document).ready(function () {

    $("ul.menu div").click(function () {
        // console.log( "ready!" );//   
        $(this).parent().find("ul").slideDown("slow");


    });
});


