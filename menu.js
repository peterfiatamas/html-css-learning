$(document).ready(function () {

    $("ul.menu div").click(function () {
// console.log( "ready!" );//   
        $(this).parent().find("ul").slideDown("slow");
        $(this).parent().hover(
                function () {
                    $(this).parent().find("ul").slideUp("slow");
                }
        )

    });
});
$(function () {

    $("div").click(function () {
        $("body").css("background", "#ccc");
    });
});

