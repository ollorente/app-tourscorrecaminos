<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const item = computed(() => props.item)
</script>

<template>
  <NuxtLink :to="`/posts/${item.id}`">
    <div class="card border-0 mb-4">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body py-3 px-0">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.content.split("<!--more-->")[0] }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </NuxtLink>
</template>
