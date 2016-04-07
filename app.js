window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);


var slider = new PageSlider($('body'));
$(window).on('hashchange', route);
var homePage =
        '<div id="page_homePage">' +
        '<div class="header"><h1>Page Slider</h1></div>' +
        '<div class="scroller">'
'<ul class="list">';

$('div[id^=page_]').each(function() {
    $(this).css('display','none')
    homePage +=
            '<li><a href="#' + this.id + '"><strong>' + this.id + '</strong></a></li>'
})

homePage += '</ul>' +
        '</div>' +
        '</div>';
$('body').append(homePage)
// Basic page routing
function route(event) {
    var page,
            hash = window.location.hash;
    var pageid = hash ? hash.substring(1) : 'page_homePage'

    slider.slidePage($('#' + pageid));

}

route();