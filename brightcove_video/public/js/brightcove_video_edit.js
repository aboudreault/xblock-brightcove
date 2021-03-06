function BrightcoveVideoEditBlock(runtime, element) {
    console.log($('.xblock-save-button', element));
    $('.xblock-save-button').bind('click', function() {
        var data = {
            'href': $('#video-href').val(),
            'api_key': $('#video-api-key').val(),
        };
        var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
        $.post(handlerUrl, JSON.stringify(data)).complete(function() {
            window.location.reload(false);
        });
    });
}
