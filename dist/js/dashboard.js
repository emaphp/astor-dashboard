/**
 * Astor Dashboard - Version 1.3.1
 * A responsive dashboard made with Sass
 * Copyright Emmanuel Antico 2015
 * Released under the MIT License
 *
 * File: dashboard.js
 * Author: @emaphp
 */

// Initializes jQuery plugins
$(function() {
    // Initialize sidebar menu
    $('#sidebar-menu').bandoneon();

    // ScrollTo
    $('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if (diff > 0) {
            $('#sidebar').scrollTo('-=' + Math.abs(diff), 500);
        } else {
            $('#sidebar').scrollTo('+=' + Math.abs(diff), 500);
        }
    });

    var hideSidebar = function () {
        $('#main-content').css('margin-left', '0px');
        $('#sidebar').css('margin-left', '-210px');
        $('#sidebar > ul').hide();
        $('#container').addClass('sidebar-closed');
        $('#sidebar-toggle').addClass('closed');
    };

    var showSidebar = function () {
        $('#main-content').css('margin-left', '210px');
        $('#sidebar > ul').show();
        $('#sidebar').css('margin-left', '0');
        $('#container').removeClass('sidebar-closed');
        $('#sidebar-toggle').removeClass('closed');
    };

    // Toggle navigation icon
    var sidevarIsVisible = $(window).width() <= 768 ? false : !!$('#sidebar > ul').is(':visible');

    // Obtain initial status from data attribute
    var status = $('#sidebar').data('status');
    if (status === 'hidden' && sidevarIsVisible) {
        hideSidebar();
        sidevarIsVisible = false;
    }

    // Sidebar toggle
    $('#sidebar-toggle').click(function () {
        sidevarIsVisible ? hideSidebar() : showSidebar();
        sidevarIsVisible = !sidevarIsVisible;
    });

    // Sidebar toggle on resize
    $(window).on('resize', function () {
        var wSize = $(window).width();
        if (wSize <= 768) {
            hideSidebar();
            sidevarIsVisible = false;
        } else if (wSize > 768) {
            sidevarIsVisible ? showSidebar() : hideSidebar();
        }
    });

    // Go-Top button
    $('footer .go-top').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(0);
    });

    // Tooltips
    $('.tooltips').tooltip();
});
