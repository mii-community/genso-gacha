<template>
  <div>
    <div
      class="w-32 h-16 text-xl rounded-lg border border-gray-800"
      @click="showFlag = true"
    >
    確率表
    </div>
    <div :class="{block: showFlag, hidden: !showFlag}">
      <p class="text-lg" @click="showFlag = false">×</p>
      <p class="text-center">確率表</p>
      <p class="pl-8">N - ノーマル(30↑~100↓)</br>
      R - レア(0.1↑~30↓)</br>
      S - スーパーレア(0.0001↑~0.1↓)</br>
      SS - ハイパーレア(0.000001↑~0.0001↓)</br>
      SSS - ハイエストレア(0.000001↓)</br>
      ↓...以下 ↑...超</p>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return { showFlag: false }
  }
}
</script>