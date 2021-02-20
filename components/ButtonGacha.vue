<template>
  <div :class="{block: showFlag, hidden: !showFlag}">
    <p class="close-button" @click="showFlag = true">×</p>
    <span class="text-center">元素ガチャ</span>
    <ul>
      <!-- 関数用意 -->
      <li class="gacha-button-mode" @click="">
        単発
      </li>
      <li class="gacha-button-mode" @click="">
        十連
      </li>
      <li class="gacha-button-mode" @click="">
        リセット
      </li>
    </ul>
    <!-- <p class="gacha-button-mode" onclick="console.log(dropElement(1));">
      単発
    </p>
    <p class="gacha-button-mode" onclick="console.log(dropElement(10));">
      十連
    </p>
    <p class="gacha-button-mode" onclick="resetGachaResult('element');">
      リセット
    </p> -->
    <!-- <div class="result-box result-element"></div> -->
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {showFlag: false}
  }
}
</script>