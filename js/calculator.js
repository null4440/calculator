function get_calc(btn) {

    // 電卓の表示部分を取得
    const display = document.calc.display;

    // 押されたボタンの値
    const value = btn.value;


    // 「AC」が押された場合
    if (value === "AC") {

        display.value = "0";

    // 「⇚」が押された場合
    } else if (value === "⇚") {

        // 最後の1文字を削除
        display.value = display.value.slice(0, -1);

        // 全部消えたら0に戻す
        if (display.value === "") {
            display.value = "0";
        }

    // 「=」が押された場合
    } else if (value === "=") {

        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }

    // 「%」が押された場合
    } else if (value === "%") {

        // 現在の数字を100で割る
        display.value = parseFloat(display.value) / 100;

    // 「+/-」が押された場合
    } else if (value === "+/-") {

        // 数値を反転
        display.value = parseFloat(display.value) * -1;

    // それ以外（数字や演算子）
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

