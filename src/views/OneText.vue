<template>
  <div class="axios-container page-container h-[calc(100%-100px)] overflow-y-auto">
    <div class="page-title">Hitokoto</div>
    <div class="oneText-info-container flex justify-center w-full">
      <el-card class="box-card w-1/2">
        <template #header>
          <div class="card-header flex justify-between items-center">
            <span>oneText</span>
            <el-button class="button" type="success" :text="true" @click="getOneText">点击获取一言
            </el-button>
          </div>
        </template>
        <div class="info-list-box p-2.5 text-right [&>*:first-child]:text-lg [&>*:first-child]:text-center" v-loading="loading">
          <div class="text item text-sm mb-[18px]" v-if="oneTextInfo?.hitokoto">
            {{ oneTextInfo?.hitokoto }}
          </div>
          <div class="text item text-sm mb-[18px]" v-if="oneTextInfo?.from">
            from: {{ oneTextInfo?.from }}
          </div>
          <div class="text item text-sm mb-[18px]" v-if="oneTextInfo?.from_who">
            from_who: {{ oneTextInfo?.from_who }}
          </div>
        </div>
      </el-card>
    </div>
    <div class="result_table my-4">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="hitokoto" label="hitokoto" width="800" />
        <el-table-column prop="from" label="from" width="150" />
        <el-table-column prop="from_who" label="from_who" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from '@/services/api'

export default defineComponent({
  name: 'Axios',
  setup() {
    const oneTextInfo: Ref = ref(null)
    const loading = ref(!1)
    const tableData: Ref = ref([])

    const getOneText = () => {
      loading.value = !0
      axios
        .get('https://v1.hitokoto.cn/')
        .then((response) => {
          oneTextInfo.value = response.data
          tableData.value.push({
            hitokoto: response.data?.hitokoto,
            from: response.data?.from,
            from_who: response.data?.from_who
          })
          loading.value = !1
        })
        .catch((error) => {
          loading.value = !1
          console.error(error)
        })
    }

    return {
      oneTextInfo,
      loading,
      getOneText,
      tableData
    }
  }
})
</script>

