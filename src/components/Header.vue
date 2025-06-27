<template>
  <div class="header w-full h-full bg-white flex justify-between items-center px-5 box-border font-bold">
    <div class="title text-xl cursor-pointer" @click="router.push('/')">
      <i class="icon el-icon-coffee-cup"></i>
      Vite + Vue3.x + TypeScript
    </div>
    <div class="go-github cursor-pointer text-base" @click="goGitHub">
      <i class="icon el-icon-info text-xl"></i> About
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const router = useRouter()

const goGitHub = () => {
  ElNotification({
    message: h('p', null, [
      h('span', null, 'show in '),
      h(
        'a',
        {
          style: 'color: teal',
          href: 'https://github.com/alterem/vite-vue3-template',
          target: '_github'
        },
        'github'
      )
    ]),
    type: 'success',
    offset: 40
  })
}
</script>

