$(function () {

    // Alphabet

    $('.coverflow').coverflow();

    $('#first').click(function () {
        $('.coverflow').coverflow('index', 0);
    });

    $('#last').click(function () {
        $('.coverflow').coverflow('index', -1);
    });

    $('#goto6').click(function () {
        $('.coverflow').coverflow('index', 6 - 1);	// zero-based index!
    });

    $('#keyboard').click(function () {
        $('.coverflow').coverflow('option', 'enableKeyboard', $(this).is(':checked'));
    });

    $('#wheel').click(function () {
        $('.coverflow').coverflow('option', 'enableWheel', $(this).is(':checked'));
    });

    $('#click').click(function () {
        $('.coverflow').coverflow('option', 'enableClick', $(this).is(':checked'));
    });

    /* CD covers */

    if ($.fn.reflect) {
        $('.photos .cover').reflect({
            opacity: 0.5, // Ajusta la opacidad del reflejo, por ejemplo 0.5 para 50%
            height: 0.33, // Controla la altura del reflejo, 0.33 significa un reflejo de un tercio del tamaño de la imagen
            fallback: true, // Opcional, si quieres una imagen sin reflejo en navegadores antiguos
            color: '#000000' // Puedes cambiar el color del reflejo si es soportado por tu versión de reflect.js
        });
    }

    $('.photos').coverflow({
        easing: 'easeOutElastic',
        duration: 1000,
        index: 3,
        width: 320,
        height: 240,
        visible: 'density',
        selectedCss: { opacity: 1 },
        outerCss: { opacity: .1 },

        confirm: function () {
            console.log('Confirm');
        },

        before: function () {
            $('#photos-name').stop(true).fadeOut('fast');
        },

        select: function (event, cover) {
            var img = $(cover).children().andSelf().filter('img').last();
            $('#photos-name').text(img.data('name') || 'unknown').stop(true).fadeIn('fast');
        },
    });

    $('#leakdetect').click(function () {
        $('#leakbucket').empty();
        for (var i = 0; i < 100; ++i) {
            $('<div><div>test</div></div>').appendTo('#leakbucket').coverflow();
        }
    });
});
$('.photos').coverflow({
    easing: 'easeOutElastic',
    duration: 1000,
    index: 3,
    width: 320,  // Ajusta este valor si es necesario
    height: 240, // Ajusta este valor si es necesario
    visible: 'density',
    selectedCss: { opacity: 1 },
    outerCss: { opacity: .1 },
    // ... resto de la configuración ...
});