<template>
  <aside class="nav relative w-full h-full box-border bg-white">
    <ul class="nav-list">
      <li class="nav-item flex-center box-border w-full h-[60px] cursor-pointer"
        :class="{ 'font-bold bg-[#f1f1f1]': nav.isActive }" v-for="(nav, index) in navList" :key="index"
        @click="navClick(nav)">
        {{ nav.name }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { NavItem } from '@/common/types'

export default defineComponent({
  name: 'Nav',

  setup() {
    const router = useRouter()

    const reactiveData = reactive({
      navList: [
        {
          name: 'Home',
          isActive: false,
          path: '/'
        },
        {
          name: 'Vuex',
          isActive: false,
          path: '/vuex'
        },
        {
          name: 'Axios',
          isActive: false,
          path: '/axios'
        },
        {
          name: 'OneText',
          isActive: false,
          path: '/oneText'
        },
        {
          name: 'Test',
          isActive: false,
          path: '/test'
        },
        {
          name: 'Plotly',
          isActive: false,
          path: '/plotly'
        },
        {
          name: 'PlotlyLine',
          isActive: false,
          path: '/plotlyLine'
        }
      ],

      navClick(e: NavItem) {
        router.push(e.path)
      }
    })

    const changeNavActive = (currentPath: string) => {
      reactiveData.navList.forEach((v: NavItem) => {
        const temp = v
        temp.isActive = temp.path === currentPath
        return temp
      })
    }

    watch(
      () => router.currentRoute.value,
      (_n) => {
        changeNavActive(_n.path)
      }
    )

    onMounted(() => {
      router.isReady().then(() => {
        changeNavActive(router.currentRoute.value.path)
      })
    })

    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

