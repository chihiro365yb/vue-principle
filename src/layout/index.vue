<script lang="ts" setup>
import Header from './Header.vue';
import Menu from './Menu.vue';

import { isCollapse } from './store';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-aside :width="`${isCollapse ? '65px' : '200px'}`">
                    <Menu />
                </el-aside>
                <el-container>
                    <el-main>
                        <slot></slot>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<style>
.common-layout {
    height: 100vh;
}

.el-container.is-vertical {
    min-height: 100%;
}
</style>
