<script setup lang="ts">
const { GetAllTermTaxonomies } = useTermTaxonomy()

const title = "Categorías"
const error = ref()
const isError = ref(false)
const loading = ref(false)
const limit = ref(10)
const page = ref(1)
const items = ref<[]>([])

const getItems = async () => {
  loading.value = true

  try {
    const data: any = await GetAllTermTaxonomies({ limit: limit.value, page: page.value })

    items.value = data
  } catch (error: any) {
    isError.value = true
    error.value = error
  } finally {
    loading.value = false
  }
}

onMounted(() => getItems())
</script>

<template>

  <Head>
    <Title>{{ title }}</Title>
  </Head>

  <NuxtLayout class="">
    <h1>{{ title }}</h1>

    <UIMain :error="error" :isError="isError" :loading="loading">
      <pre>{{ items }}</pre>
    </UIMain>
  </NuxtLayout>
</template>
