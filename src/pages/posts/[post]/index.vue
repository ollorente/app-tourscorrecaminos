<script setup lang="ts">
const { GetOnePost } = usePost()

const ID = String(useRoute().params.post)
const title = "Post"
const error = ref()
const isError = ref(false)
const loading = ref(false)
const item = ref<{}>({})

const getItem = async () => {
  loading.value = true

  try {
    const data: any = await GetOnePost(ID)

    item.value = data
  } catch (error: any) {
    isError.value = true
    error.value = error
  } finally {
    loading.value = false
  }
}

onMounted(() => getItem())
</script>

<template>

  <Head>
    <Title>{{ title }}</Title>
  </Head>

  <NuxtLayout class="">
    <h1>{{ title }}</h1>

    <UIMain :error="error" :isError="isError" :loading="loading">
      <pre>{{ item }}</pre>
    </UIMain>
  </NuxtLayout>
</template>
