var $ = jQuery.noConflict();
$(document).ready(function($) {

    'use strict';

    /*Show DOM after load scripts*/
    $('.main__right').css('display', 'flex');
    
    /*Check error if click*/
    var $verify_button = $('.check_button');
    $verify_button.on('click', function(){
        $(this).parents('.form__verify').addClass('error_verify');
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