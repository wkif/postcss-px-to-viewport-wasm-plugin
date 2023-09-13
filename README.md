<div align="center">
  <br/>
  <h1>🐺 <b>postcss-px-to-viewport-wasm-plugin 🐺</b></h1>
</div>


基于Wasm实现对html字符串中px单位的转换，配合 [postcss-px-to-viewport-8-plugin](https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin)实现移动端适配，解决js正则替换实现方式对长文本处理时的性能问题。


```ts
import { convertPxToVw } from "../build/release.js";

const str = `  <div class="box" style="width: 200px; height: 50px;"></div>
<div class="box" style="width: 300px; height: 100px;"></div>
<img src="http://upyun_test.huixiaoer.com/group-marketing/community_qa/2c813a17d726cbae95a590a8e5a80f7b.jpg" alt="" data-href="" style="width: 858.00px;height: 482.63px;">
`;
console.time();
const res = convertPxToVw(str, 750, 4);
console.timeEnd();
console.log(res);

```

