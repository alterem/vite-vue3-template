<template>
  <main class="main-container absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-[#f1f1f1] box-border flex flex-col justify-between">
    <div class="top relative box-border w-full h-[60px] mb-2.5">
      <Header />
    </div>

    <div class="bottom relative box-border w-full h-full flex justify-between">
      <div class="left relative w-[80px] h-full box-border">
        <Nav />
      </div>

      <div class="right relative w-full h-full box-border pb-2.5 px-2.5">
        <div class="content relative w-full h-full bg-white rounded p-2.5 box-border">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Header,
    Nav
  }
})
</script>

