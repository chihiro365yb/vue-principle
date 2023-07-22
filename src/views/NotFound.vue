<template>
    <el-empty>
        <el-button type="primary" @click="backHome">返回首页</el-button>
    </el-empty>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const backHome = () => {
    router.replace('/');
};
</script>
