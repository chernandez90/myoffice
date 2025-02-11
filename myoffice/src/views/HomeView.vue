<script setup>
import MainBar from '../components/MainBar.vue'
import MenuBar from '@/components/MenuBar.vue'
import MenuBody from '@/components/MainBody.vue'
</script>

<template>
  <div>
    <main-bar />
  </div>

  <div class="flex flex-wrap w-full">
    <menu-bar />
    <menu-body />
  </div>
</template>
