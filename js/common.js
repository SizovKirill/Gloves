// console.log('in common.js');
// console.log($);

// screen__menu
$(() => {
    const hamburger = $('.hamburger-menu__block');
    const fullScreenMenu = $('.screen-menu');
    const fullScreenMenuCloser = fullScreenMenu.find('.screen-menu__btn-exit');

    hamburger.on('click', () => {
        fullScreenMenu.fadeIn(300);
    });
    fullScreenMenuCloser.on('click', (evt) => {
        evt.preventDefault();
        fullScreenMenu.fadeOut(300);
    });
});

// form__ajax
var submitForm = function(ev) {
    ev.preventDefault();
    // console.log('I am in submitForm');

    var form = $(ev.target),
        url = form.attr('action'),
        data = form.serialize();

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else {
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

}

$('#index-form').on('submit', submitForm);