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

    // Sidebar toggle on resize
    $(window).on('load resize', function () {
        var wSize = $(window).width();
        if (wSize <= 768) {
            $('#container').addClass('sidebar-close');
            $('#sidebar > ul').hide();
        } else if (wSize > 768) {
            $('#container').removeClass('sidebar-close');
            $('#sidebar > ul').show();
        }
    });

    // Toggle navigation icon
    var sidevarVisible = $(window).width() <= 768 ? false : !!$('#sidebar > ul').is(':visible');

    if (!sidevarVisible) {
        $('#sidebar-toggle').addClass('closed');
    }

    $('.fa-bars').click(function () {
        if (sidevarVisible) {
            $('#main-content').css('margin-left', '0px');
            $('#sidebar').css('margin-left', '-210px');
            $('#sidebar > ul').hide();
            $('#container').addClass('sidebar-closed');
            $('#sidebar-toggle').addClass('closed');
            sidevarVisible = false;
        } else {
            $('#main-content').css('margin-left', '210px');
            $('#sidebar > ul').show();
            $('#sidebar').css('margin-left', '0');
            $('#container').removeClass('sidebar-closed');
            $('#sidebar-toggle').removeClass('closed');
            sidevarVisible = true;
        }
    });

    // Menu slides
    $('.panel .tools .fa-chevron-down').click(function () {
        var el = $(this).parents('.panel').children('.panel-body');
        if ($(this).hasClass('fa-chevron-down')) {
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            el.slideUp(150);
        } else {
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            el.slideDown(150);
        }
    });

    $('.panel .tools .fa-times').click(function () {
        $(this).parents(".panel").parent().remove();
    });

    // Tooltips
    $('.tooltips').tooltip();

    // Popovers
    $('.popovers').popover();
});
