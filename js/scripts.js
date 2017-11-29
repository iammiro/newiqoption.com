function sliderJS(s, o) {
    var n = $(o).find("ul"), e = $(o).find("li.slider" + s), f = $(e).width();
    $(n).animate({marginLeft: "-" + f * s}, 500)
}

function open_story(s) {
    "none" == document.getElementById(s).style.display ? (document.getElementById(s).style.display = "flex", document.getElementById(s).style.transition = "width 2s, height 2s, background-color 2s, transform 2s") : document.getElementById(s).style.display = "none"
}

$("#open-regulation").click(function () {
    $("#open-regulation").css("color", "#fb7a08"), $("#open-about-us").css("color", "#ffffff"), $("#open-for-traders").css("color", "#ffffff"), $("#regulation").css("display", "flex"), $("#about-us").css("display", "none"), $("#for-traders").css("display", "none")
}), $("#open-about-us").click(function () {
    $("#open-regulation").css("color", "#ffffff"), $("#open-about-us").css("color", "#fb7a08"), $("#open-for-traders").css("color", "#ffffff"), $("#regulation").css("display", "none"), $("#about-us").css("display", "flex"), $("#for-traders").css("display", "none")
}), $("#open-for-traders").click(function () {
    $("#open-regulation").css("color", "#ffffff"), $("#open-about-us").css("color", "#ffffff"), $("#open-for-traders").css("color", "#fb7a08"), $("#regulation").css("display", "none"), $("#about-us").css("display", "none"), $("#for-traders").css("display", "flex")
}), $("#open-user-cabinet").click(function () {
    $("#open-regulation").css("color", "#ffffff"), $("#open-about-us").css("color", "#ffffff"), $("#open-for-traders").css("color", "#ffffff"), $("#open-user-cabinet").css("color", "#fb7a08"), $("#regulation").css("display", "none"), $("#about-us").css("display", "none"), $("#for-traders").css("display", "none"), $("#user-cabinet").css("display", "flex")
}), $(function () {
    $("#accordion").accordion({collapsible: !0})
}), $(document).ready(function () {
    $(".slider").each(function () {
        var s = $(this);
        $(s).append("<div class='nav'></div>"), $(s).find("li").each(function () {
            $(s).find(".nav").append("<span rel='" + $(this).index() + "'></span>"), $(this).addClass("slider" + $(this).index())
        }), $(s).find("span").first().addClass("on")
    })
}), $(document).on("click", ".slider .nav span", function () {
    var s = $(this).closest(".slider");
    return $(s).find("span").removeClass("on"), $(this).addClass("on"), sliderJS($(this).attr("rel"), s), !1
});