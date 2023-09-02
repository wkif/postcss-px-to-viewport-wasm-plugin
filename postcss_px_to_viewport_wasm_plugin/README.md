<div align="center">
  <br/>
  <h1>🐺 <b>postcss-px-to-viewport-wasm-plugin 🐺</b></h1>
</div>


基于Wasm实现对html字符串中px单位的转换，配合 [postcss-px-to-viewport-8-plugin](https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin)实现移动端适配，解决js正则替换实现方式对长文本处理时的性能问题。

## Vite使用

> https://cn.vitejs.dev/guide/features.html#webassembly

### 安装vite-plugin-wasm

> https://github.com/Menci/vite-plugin-wasm



```
yarn add -D vite-plugin-wasm
yarn add -D vite-plugin-top-level-await
```

```
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait()
  ]
});
```

安装本项目：

```
yarn add -D postcss_px_to_viewport_plugin_wasm
```



