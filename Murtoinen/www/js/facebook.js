facebookScale = function () {
    var adjustWidth;
    adjustWidth = $('.facebook-likebox').width() / 280;
    return $('.fb-page').css({
        '-webkit-transform': 'scale(' + adjustWidth + ')',
        '-moz-transform': 'scale(' + adjustWidth + ')',
        'transform': 'scale(' + adjustWidth + ')'
    });
}

$(function () {
    $('.fb-page').on('resize DOMSubtreeModified', facebookScale);
    $(window).on('resize', facebookScale);
})


(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/fi_FI/sdk.js#xfbml=1&version=v3.2&appId=167197514219609&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));