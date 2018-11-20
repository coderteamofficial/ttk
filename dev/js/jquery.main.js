var $ = jQuery.noConflict();
$(document).ready(function($) {

    'use strict';

    $('.main__right').css('display', 'flex');

    /*Phone mask*/
    var phone = $('input[type="tel"]');
    phone.inputmask("+7 (999) 999-99-99", {
        oncomplete: function() {
            $('.section-1 .form__button .button').removeAttr('disabled');
            phone.addClass('active');
        },
        oncleared: function() {
            $('.section-1 .form__input input').removeClass('active');
            $('.section-1 .form__button .button').attr('disabled', true);
        },
        clearIncomplete: true
    });

    var verify = $('.section-2 input[type="text"], .section-4 input[type="text"]');
    verify.inputmask("9 9 9 9", {
        oncomplete: function() {
            $('.section-2 .form__button .button').removeAttr('disabled');
            $('.section-4 .form__button .button').removeAttr('disabled');
            verify.addClass('active');
        },
        clearIncomplete: true,
        oncleared: function() {
            $('.section-2 .form__input input').removeClass('active');
            $('.section-4 .form__input input').removeClass('active');
            $('.section-2 .form__button .button').attr('disabled', true);
            $('.section-4 .form__button .button').attr('disabled', true);
        }
    });

    /*Show hide pass*/
    $('.toggle-password').on('click', function() {
        $(this).toggleClass("icon-visible icon-invisible");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

});