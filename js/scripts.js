$(document).ready(function() {
    $("#notiffrontdoor").click(function() {
        $(".warning").hide();
        $("#closed").show();
    });

    $("#notiflivingroomlight").click(function() {
        $("#on").hide();
        $("#off").show();
    });

    $("#panel1").click(function() {
        $("#panelbody1").toggle();
    });
    $("#panel2").click(function() {
        $("#panelbody2").toggle();
    });
    $("#panel3").click(function() {
        $("#panelbody3").toggle();
    });
});