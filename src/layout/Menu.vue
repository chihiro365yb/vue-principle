<template>
    <el-menu default-active="home" class="el-menu-vertical-demo" :collapse="isCollapse" router>
        <el-menu-item index="home">
            <el-icon><House /></el-icon>
            <template #title>
                <span>首页</span>
            </template>
        </el-menu-item>
        <el-menu-item index="form">
            <el-icon><Document /></el-icon>
            <template #title>表单</template>
        </el-menu-item>
        <i class="footer-line" />
        <div class="footer">
            <el-icon v-if="!isCollapse" @click="fold"><Fold /></el-icon>
            <el-icon v-else @click="expand"><Expand /></el-icon>
        </div>
    </el-menu>
</template>

<script lang="ts" setup>
import { isCollapse } from './store';

const fold = () => {
    isCollapse.value = true;
};

const expand = () => {
    isCollapse.value = false;
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}

.el-menu {
    position: relative;
    height: 100%;
}

.footer-line {
    position: absolute;
    bottom: 56px;
    display: block;
    height: 1px;
    width: 100%;
    background: #dcdfe6;
}

.footer {
    font-size: 22px;
    position: absolute;
    bottom: 0;
    height: 56px;
    line-height: 56px;
    right: 20px;
}

.footer .el-icon {
    cursor: pointer;
}
</style>
