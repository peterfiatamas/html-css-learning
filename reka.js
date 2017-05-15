$(document).ready(function(){
    /*console.log("ready");*/
    $("ul#menu div").click(function () {  
        $(this).parent().find("ul").slideDown("slow");
        $(this).parent().hover(
                function () {
                    $(this).parent().find("ul").slideUp("slow");
                }
        )

    });
    
});

