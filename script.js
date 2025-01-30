let score = 0;  // 所持金
let autoClickerCount = 0;  // 購入済みの自動収益数
let autoClickerPrice = 1;  // 自動収益の初期価格
let incomePerSecond = 0;  // 1秒あたりの収益
let incomeValue = 1;

const scoreElement = document.getElementById("score");
const autoClickerButton = document.getElementById("autoClicker");
const autoClickerPriceElement = document.getElementById("autoClickerPrice");
const autoClickerCountElement = document.getElementById("autoClickerCount");
const incomePerSecondElement = document.getElementById("incomePerSecond");

// クリックでスコアを増加
document.getElementById("clicker").addEventListener("click", () => {
    score+=100;
    updateUI();
});

// 自動収益を購入
autoClickerButton.addEventListener("click", () => {
    if (score >= autoClickerPrice) {
        score -= autoClickerPrice;  // 所持金を減らす
        autoClickerCount++;  // 購入数を増やす
        incomeValue = Math.ceil(incomeValue * 1.05);
        incomePerSecond += incomeValue;  // 毎秒の収益を増やす
        autoClickerPrice = Math.ceil(autoClickerPrice * 1.1);  // 価格を1.1倍

        updateUI();
    }
});

// 1秒ごとに収益を加算
setInterval(() => {
    score += incomePerSecond;
    updateUI();
}, 1000);

// UIを更新
function updateUI() {
    scoreElement.textContent = score;
    autoClickerPriceElement.textContent = autoClickerPrice;
    autoClickerCountElement.textContent = autoClickerCount;
    incomePerSecondElement.textContent = incomePerSecond;

    // 所持金が足りない場合、ボタンを無効化
    autoClickerButton.disabled = score < autoClickerPrice;
}
