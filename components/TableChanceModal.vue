<template>
  <div
    class="my-modal fixed z-50 rounded-3xl border-gray-800 border"
    v-show="showTableChanceModal"
  >
    <p class="text-2xl text-center my-4">確率表</p>
    <span class="text-4xl absolute top-0 right-0 mr-4" @click="toggle">×</span>
    <p class="leading-10 text-lg p-8">
      N - ノーマル(30↑~100↓)<br />
      R - レア(0.1↑~30↓)<br />
      S - スーパーレア(0.0001↑~0.1↓)<br />
      SS - ハイパーレア(0.000001↑~0.0001↓)<br />
      SSS - ハイエストレア(0.000001↓)<br />
      ↓...以下 ↑...超
    </p>
  </div>
</template>
<script lang="ts">
export default {
  computed: {
    showTableChanceModal() {
      return this.$store.getters['showTableChanceModal']
    },
  },
  methods: {
    toggle() {
      return this.$store.commit('toggleShowTableChanceModal')
    },
  },
}
</script>
