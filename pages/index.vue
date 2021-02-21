<template>
  <div class="container">
    <main>
      <table-chance-button></table-chance-button>
      <table-chance-modal></table-chance-modal>
      <gacha-button></gacha-button>
      <!-- <div class="gacha-screens">
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
      </div> -->
    </main>
  </div>
</template>

<style>
.my-modal {
  top: 35%;
  width: 600px;
  left: calc(50% - 300px);
}
</style>
