$(function () {
    //console.log('ready!');//
    $(".fo-menupontok").click(function () {
        $(this).parent().find(" .legordulo").slideDown("slow");
        $(this).parent().hover(
                function () {
                    $(this).parent().find(".legordulo").slideUp("slow");
                }
        )

    });
});


