<template>
  <div class="axios-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="user-info-container flex justify-center w-full">
      <el-card class="box-card w-[480px]" shadow="hover">
        <template #header>
          <div class="card-header flex justify-between items-center">
            <span>Alterem</span>
            <el-button class="button" type="success" :text="true" @click="getUserInfo">点击获取Author信息
            </el-button>
          </div>
        </template>
        <div class="info-list-box p-2.5" v-loading="loading">
          <div class="text item text-sm mb-[18px]" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
          <div class="text item text-sm mb-[18px]" v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
          <div class="text item text-sm mb-[18px]" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
          <div class="text item text-sm mb-[18px]" v-if="userInfo?.avatar_url">
            <img :src="userInfo?.avatar_url" alt="User Avatar" class="w-24 h-24 rounded-full">
          </div>
        </div>
      </el-card>
    </div>
    <div style="width: 80%; margin: 1em auto">
      <el-card shadow="hover">
        <template #header2>
          <div class="card-header flex justify-between items-center">
            <span>el-table</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from '@/services/api'

export default defineComponent({
  name: 'Axios',
  setup() {
    const userInfo: Ref = ref(null)
    const loading = ref(false)
    const tableData: Array<Object> = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]

    const getUserInfo = () => {
      loading.value = true
      axios
        .get('/users/alterem')
        .then((response) => {
          console.log('response: ', response.data)
          userInfo.value = response.data
          loading.value = false
        })
        .catch((error) => {
          loading.value = false
          console.error(error)
        })
    }

    return {
      userInfo,
      loading,
      getUserInfo,
      tableData
    }
  }
})
</script>

