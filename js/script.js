// for the navigation toggler btn //

$(document).ready(function () {
    'use strict';

    $('.nav-button').click(function () {

        $('.nav-button').toggleClass('change');

    });

});

// for the sticky navigation //

$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {

        let position = $(this).scrollTop();

        if (position >= 200) {
            $('.nav-menu').addClass('cstm-navbar');

        } else {
            $('.nav-menu').removeClass('cstm-navbar');
        }

    });

});

// Lightbox //
$(document).ready(function () {
    'use strict';

    lightbox.option({
        'wrapAround': true
    })

});

// Famous writers //

$(document).ready(function () {

    $('.writers-accordion').click(function (event) {

        if (event.target.id.split('-')[0] === 'btn') {

            $('#book-1').attr('src', '/img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
            $('#book-2').attr('src', '/img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');

        }

    });

});

// Add animations & initialize wow //

$(document).ready(function () {

    'use strict';
    new WOW().init();

});