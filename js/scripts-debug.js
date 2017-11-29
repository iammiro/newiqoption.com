/**
 * Created by User3 on 19.01.2017.
 */

//меню................................................................................................................./
$("#open-regulation").click(function () {
    $("#open-regulation").css("color", "#fb7a08");
    $("#open-about-us").css("color", "#ffffff");
    $("#open-for-traders").css("color", "#ffffff");
    $("#regulation").css("display", "flex");
    $("#about-us").css("display", "none");
    $("#for-traders").css("display", "none");
});
$("#open-about-us").click(function () {
    $("#open-regulation").css("color", "#ffffff");
    $("#open-about-us").css("color", "#fb7a08");
    $("#open-for-traders").css("color", "#ffffff");
    $("#regulation").css("display", "none");
    $("#about-us").css("display", "flex");
    $("#for-traders").css("display", "none");
});
$("#open-for-traders").click(function () {
    $("#open-regulation").css("color", "#ffffff");
    $("#open-about-us").css("color", "#ffffff");
    $("#open-for-traders").css("color", "#fb7a08");
    $("#regulation").css("display", "none");
    $("#about-us").css("display", "none");
    $("#for-traders").css("display", "flex");
});
$("#open-user-cabinet").click(function () {
    $("#open-regulation").css("color", "#ffffff");
    $("#open-about-us").css("color", "#ffffff");
    $("#open-for-traders").css("color", "#ffffff");
    $("#open-user-cabinet").css("color", "#fb7a08");
    $("#regulation").css("display", "none");
    $("#about-us").css("display", "none");
    $("#for-traders").css("display", "none");
    $("#user-cabinet").css("display", "flex");
});

// FAQ страница......................................................................................................../
$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});

//слайдер на странице астон мартин...................................................................................../
$(document).ready(function () {
    $(".slider").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='" + $(this).index() + "'></span>"); // добавляем блок навигации
            $(this).addClass("slider" + $(this).index());
        });
        $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
    });
});
function sliderJS(obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider" + obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-" + step * obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function () { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});

//блоки с пользовательскими историями под фб.........................................................................../
function open_story(id) {
    var display = document.getElementById(id).style.display;
    if (display == 'none') {
        document.getElementById(id).style.display = 'flex';
        document.getElementById(id).style.transition = 'width 2s, height 2s, background-color 2s, transform 2s';
    } else {
        document.getElementById(id).style.display = 'none';
    }
}