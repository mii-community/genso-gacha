<template>
  <div>
    <div
      class="fixed top-0 right-0 mt-8 mr-8 hover:bg-gray-800 hover:text-white w-64 h-16 flex items-center justify-center text-2xl rounded-full border border-gray-800"
      @click="toggle"
    >
      確率表
    </div>
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
