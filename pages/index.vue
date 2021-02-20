<template>
  <div class="container">
    <main>
      <div class="prob-button" onclick="openProb();">確率表</div>
      <div class="prob-screen hide">
        <p class="close-button" onclick="openProb();">×</p>
        <p class="gacha-title">確率表</p>
        <p class="prob-text">N - ノーマル(30↑~100↓)</p>
        <p class="prob-text">R - レア(0.1↑~30↓)</p>
        <p class="prob-text">S - スーパーレア(0.0001↑~0.1↓)</p>
        <p class="prob-text">SS - ハイパーレア(0.000001↑~0.0001↓)</p>
        <p class="prob-text">SSS - ハイエストレア(0.000001↓)</p>
        <p class="prob-text">↓...以下 ↑...超</p>
      </div>
      <div class="header">元素ガチャ.com</div>
      <div class="gacha-screens">
        <div class="element-gacha-screen gacha-screen hide">
          <p class="close-button" onclick="openElement();">×</p>
          <p class="gacha-title">元素ガチャ</p>
          <p class="gacha-button-mode" onclick="console.log(dropElement(1));">
            単発
          </p>
          <p class="gacha-button-mode" onclick="console.log(dropElement(10));">
            十連
          </p>
          <p class="gacha-button-mode" onclick="resetGachaResult('element');">
            リセット
          </p>
          <div class="result-box result-element"></div>
        </div>
        <div class="und-gacha-screen gacha-screen hide">
          <p class="close-button" onclick="openUnd();">×</p>
          <p class="gacha-title">未発見元素ガチャ</p>
          <p class="gacha-button-mode" onclick="console.log(dropUnd(1));">
            単発
          </p>
          <p class="gacha-button-mode" onclick="console.log(dropUnd(10));">
            十連
          </p>
          <p class="gacha-button-mode" onclick="resetGachaResult('und');">
            リセット
          </p>
          <div class="result-box result-und"></div>
        </div>
        <div class="air-gacha-screen gacha-screen hide">
          <p class="close-button" onclick="openAir();">×</p>
          <p class="gacha-title">空気ガチャ</p>
          <p class="gacha-button-mode" onclick="console.log(dropAir(1));">
            単発
          </p>
          <p class="gacha-button-mode" onclick="console.log(dropAir(10));">
            十連
          </p>
          <p class="gacha-button-mode" onclick="resetGachaResult('air');">
            リセット
          </p>
          <div class="result-box result-air"></div>
        </div>
      </div>
      <div class="gacha-buttons">
        <div class="gacha-button element-gacha" onclick="openElement();">
          元素ガチャ
        </div>
        <div class="gacha-button und-gacha" onclick="openUnd();">
          未発見元素ガチャ
        </div>
        <div class="gacha-button air-gacha" onclick="openAir();">
          空気ガチャ
        </div>
      </div>
    </main>
  </div>
</template>

<style>
/* クラス別デザイン

.header {
  padding-top: 5%;
  text-align: center;
  font-size: 48px;
}

.prob-button {
  transition: color, background-color 0.2s cubic-bezier(0, 0.55, 0.45, 1);
  position: absolute;
  font-size: 24px;
  border: 1px solid;
  border-color: #232323;
  border-radius: 28px;
  background-color: #fefefe;
  padding: 8px 8px 8px 8px;
  width: 200px;
  text-align: center;
  right: 32px;
  top: 32px;
  user-select: none;
}

.prob-button:hover {
  color: #fdfdfd;
  background-color: #232323;
}

.prob-screen {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: absolute !important;
  width: 640px;
  top: 35%;
  left: 0;
  right: 0;
  margin: auto;
  height: 105%;
  font-size: 24px;
  z-index: 2;
  border: 1px solid;
  border-color: #232323;
  border-radius: 28px;
  background-color: #fdfdfd;
  user-select: none;
}

.prob-text {
  padding-left: 32px;
}

.gacha-title {
  text-align: center;
}

.gacha-buttons {
  margin: 90px 36% 0 36%;
}

.gacha-button {
  transition: color, background-color 0.2s cubic-bezier(0, 0.55, 0.45, 1);
  margin-top: 36px;
  text-align: center;
  font-size: 24px;
  border: 1px solid;
  border-color: #232323;
  border-radius: 28px;
  background-color: #fefefe;
  padding: 8px 8px 8px 8px;
  user-select: none;
}

.gacha-button:hover {
  color: #fdfdfd;
  background-color: #232323;
}

.gacha-screen {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: absolute !important;
  width: 640px;
  top: 35%;
  left: 0;
  right: 0;
  margin: auto;
  height: 105%;
  text-align: center;
  font-size: 24px;
  z-index: 1;
  border: 1px solid;
  border-color: #232323;
  border-radius: 28px;
  background-color: #fdfdfd;
  user-select: none;
}

.gacha-button-mode {
  transition: color, background-color 0.2s cubic-bezier(0, 0.55, 0.45, 1);
  display: inline-flex;
  padding: 4px 4px 4px 4px;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 24px 0 24px;
  border: 1px solid;
  border-color: #232323;
  border-radius: 28px;
}

.gacha-button-mode:hover {
  color: #fdfdfd;
  background-color: #232323;
}

.result-box {
  position: relative;
  height: 60%;
  margin: 32px;
  border: 1px solid;
  border-color: #232323;
  overflow-y: scroll;
}

.result-item {
  margin: 4px 4px 4px 4px;
  padding: 7px 7px 7px 7px;
  text-align: left;
  border: 1px solid;
  border-color: #c0c0c0;
}

.close-button {
  position: absolute;
  right: 0;
  padding-right: 24px;
  transform: scale(1.5);
}

/* Utility

.hide {
  position: relative;
  transform: scale(0);
  z-index: 1;
} */
</style>
