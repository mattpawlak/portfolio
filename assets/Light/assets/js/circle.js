var $window = $(window);
var $elem = $("#counter")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
$(document).on("scroll", function () {
$('.1.circle').circleProgress({
  value: 0.75,
  fill: {gradient: ['#0080FF', '#7ABDFF']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});
$('.2.circle').circleProgress({
  value: 0.75,
  fill: {gradient: ['#0080FF', '#7ABDFF']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});
$('.3.circle').circleProgress({
  value: 0.7,
  fill: {gradient: ['#0080FF', '#7ABDFF']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
});
$('.4.circle').circleProgress({
  value: 0.4,
  fill: {gradient: ['#0080FF', '#7ABDFF']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(40 * progress) + '<i>%</i>');
});
$('.5.circle').circleProgress({
  value: 0.5,
  fill: {gradient: ['#0080FF', '#7ABDFF']},
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
});
});
