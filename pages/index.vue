<script setup lang="ts">
const { GetAllPosts } = usePost()

const title = "Home"
const error = ref()
const isError = ref(false)
const loading = ref(false)
const limit = ref(10)
const page = ref(1)
const items = ref<[]>([])

const getItems = async () => {
  loading.value = true

  try {
    const data: any = await GetAllPosts({ limit: limit.value, page: page.value })

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
      <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-12 col-md-3">
          <Card :item="item"></Card>
        </div>
      </div>

      <pre>{{ items }}</pre>
    </UIMain>
  </NuxtLayout>
</template>
