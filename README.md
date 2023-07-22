# Vue 3 + TypeScript + Vite

#配置 mockjs 的插件 viteMockServe 会出现 if (!require.cache)报错

解决办法：
在 node_modules/vite-plugin-mock/dist/index.mjs 这个文件中做如下配置：

```
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
```
