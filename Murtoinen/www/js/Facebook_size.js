$(window).resize(function () {
    //Do the reload of plugin
    var new_width = $("#facebook").parent().width();
    $("#facebook").css("width", new_width);
    var url = $('#facebook').attr('src').split("&width=");
    url = url[0] + '&width=' + new_width;
    $('#facebook').attr('src', url);
});