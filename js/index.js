
$(".openNav").click(function () {
    $("#leftMenu").animate({ width: '250px' }, 200)
    $("#home-content").animate({ marginLeft: '250px' }, 200)
})

$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 200)
    $("#home-content").animate({ marginLeft: '0px' }, 200)
})


$("#leftMenu a").click(function (e) {

    let targetSection = $(e.target).attr("href");
    // targetSection = $(targetSection).filter(":not([href=\"#\"])");
    if ($(targetSection).hasClass("closeBtn")) {
        console.log("you closed the menu");
    } else {
        let targetOffset = $(targetSection).offset().top;
        console.log(targetSection);
        $("html,body").animate({ scrollTop: targetOffset }, 200)

    }

})

$('#sliderDown .toggle').click(function () {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

window.onload = function () {

    countDown("10 october 2026 10:30:00");
}

function countDown(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDown(countTo); }, 1000);
}

var max = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var amountLeft = max - length;
    if (amountLeft <= 0) {
        $("#chars").text("your available character finished");

    }
    else {

        $("#chars").text(amountLeft);
    }
})

