<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, useShadowRoot } from 'vue'
import { BackTop } from 'vant'

const target = ref()
const shadowRoot = useShadowRoot()

</script>

<template>
  <BackTop :target="target" :teleport="shadowRoot" />
</template>
