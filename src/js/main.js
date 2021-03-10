$('.time').countdown('2021/03/15', function(event) {
    $(this).html(event.strftime('%D : %H : %M'));
});