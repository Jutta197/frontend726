// ボタンとラベルの参照を取得します
const label = document.getElementById("text-result");
const resetButton = document.getElementById("change-text1");
const addButton = document.getElementById("change-text2");
const subtractButton = document.getElementById("change-text3");

// 初期値を設定します
let value = 0;

// ラベルを現在の値で更新する関数を定義します
function updateLabel() {
    label.textContent = "値：" + value;
}

// 「リセット」ボタンのイベントリスナーを設定します
resetButton.addEventListener("click", function () {
    value = 0;
    updateLabel();
});

// 「1を加算」ボタンのイベントリスナーを設定します
addButton.addEventListener("click", function () {
    value += 1;
    updateLabel();
});

// 「1を減算」ボタンのイベントリスナーを設定します
subtractButton.addEventListener("click", function () {
    value -= 1;
    updateLabel();
});

// ラベルを初期値で更新します
updateLabel();
