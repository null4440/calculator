function get_calc(btn) {

    // 電卓の表示部分を取得
    const display = document.calc.display;

    // 押されたボタンの値
    const value = btn.value;

    // AC
    if (value === "AC") {

        display.value = "0";

    // ⇚
    } else if (value === "⇚") {

        // 1文字削除
        display.value = display.value.slice(0, -1);

        // 全部消えたら0にする
        if (display.value === "") {
            display.value = "0";
        }

    // =
    } else if (value === "=") {

        display.value = eval(display.value);

    // %
    } else if (value === "%") {

        // 現在の数字を100で割る
        display.value = (display.value) / 100;

    // +/-
    } else if (value === "+/-") {

        // 入力してある数字の＋－を反転させる
        display.value = (display.value) * -1;

    //.
    } else if (value === ".") {
        display.value = (display.value) + ".";

    } else {

        // 最初に0が表示されている場合
        if (display.value === "0") {
            display.value = value;
        } else {
            // 現在の表示にボタンの値を追加
            display.value += value;
        }
    }
}

