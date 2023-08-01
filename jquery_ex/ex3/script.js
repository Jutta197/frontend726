$(function () {
    // $("#text").animate({
    //     'fontSize': '128px'
    // }, 2000);
    //IDが「text」の要素を選択し、そのフォントサイズを2秒以内に初期サイズから「128px」まで徐々に変更します

    // $("#text").animate({ 'left': '100%' })
    //     .animate({ 'left': '40%' })
    //     .animate({ 'fontSize': '68px' })
    //     .animate({ 'left': '100%' })
    //     .animate({ 'left': '0' })

    $("#in").fadeIn(3000);
    $("#out").fadeOut(3000);

    setInterval(() => {
        $("#toggle").fadeToggle();
    }, 1000); //繰り返し
});