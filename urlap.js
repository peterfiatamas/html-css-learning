var validate = function () {
    var nev = $('#nev');
    var hibauzenet = $(".nev-hiba");
    var value = nev.val();

    nev.removeClass("hiba");
    hibauzenet.text("");
    hibauzenet.hide();


    if (value.length < 8) {
        var error = "Legalább nyolc karakter kell!";
    }
    if (value.length < 1) {
        var error = "Nincs kitöltve a mező!";
    }
    if (error != undefined) {
        nev.addClass("hiba");
        hibauzenet.text(error);
        hibauzenet.show();
    }
};

var callback = function () {

    $('#nev').on("change", validate);
    
    $('input').click(function () {
        // $(this) mindig a konkrét eseményt kiváltó elem lesz
        var value = $(this).val();
        console.log(value)
    });
};


$('document').ready(callback);



