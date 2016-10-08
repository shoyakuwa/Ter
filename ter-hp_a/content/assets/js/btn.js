$(function () {
    $('.button').prevAll().hide();
    $('.button').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).children('img').attr("src", $('.button img').attr("src").replace("-more", "-close"));
        } else {
            $(this).prevAll().slideUp();
            $(this).children('img').attr("src", $('.button img').attr("src").replace("-close", "-more"));
        }
    });
});
