$(function () {
    //この中にjqueryの処理
    let text = $("#text-1");
    //
    console.log(text.html());
    //helloをbyeに変更する
    text.html("Bye");
    //リンクの話
    //
    let link = $("#link-1");
    //リンクのURLを取得する
    console.log(link.attr("href"));
    //リンクの書き換え
    link.attr("href", "https://stackoverflow.com/");
    link.attr("target", "_blank");
    //CSSの話
    let texts = $(".text-class");
    //とってきた要素に色をつける eq:選んで
    texts.eq(0).css("color", "red");
    texts.eq(2).css("color", "red");
});