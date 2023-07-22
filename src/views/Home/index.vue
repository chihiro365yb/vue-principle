<script lang="ts" setup>
import { getUsers } from '@/apis';
import { useCounterStore } from '@/store/counter';

const store = useCounterStore();

const getUserData = async () => {
    const res = await getUsers();
    console.log(res);
};
</script>

<template>
    我是home
    <el-button @click="getUserData">请求</el-button>
    <el-button type="primary" @click="store.increment">{{ store.count }}++</el-button>
</template>
