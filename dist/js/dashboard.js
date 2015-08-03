/**
 * Astor Dashboard - Version 1.2.0
 * A responsive dashboard made with Sass
 * Copyright Emmanuel Antico 2015
 * Released under the MIT License
 *
 * File: dashboard.js
 * Author: @emaphp
 */

// Initializes jQuery plugins
$(function() {
    // Initialize sidebar
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
    var sidevarVisible = $(window).width() <= 768 ? false : !!$('#sidebar > ul').is(':visible');

    // Sidebar toggle
    $('#sidebar-toggle').click(function () {
        if (sidevarVisible) {
            hideSidebar();
        } else {
            showSidebar();
        }

        sidevarVisible = !sidevarVisible;
    });

    // Sidebar toggle on resize
    $(window).on('load resize', function () {
        var wSize = $(window).width();
        if (wSize <= 768) {
            hideSidebar();
            sidevarVisible = false;
        } else if (wSize > 768) {
            if (sidevarVisible) {
                showSidebar();
            } else {
                hideSidebar();
            }
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
