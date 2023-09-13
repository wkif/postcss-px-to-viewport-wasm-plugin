import { convertPxToVw } from "../build/release.js";

const str = `  <div class="box" style="width: 200px; height: 50px;"></div>
<div class="box" style="width: 300px; height: 100px;"></div>
<img src="http://upyun_test.huixiaoer.com/group-marketing/community_qa/2c813a17d726cbae95a590a8e5a80f7b.jpg" alt="" data-href="" style="width: 858.00px;height: 482.63px;">
`;
console.time();
const res = convertPxToVw(str, 750, 4);
console.timeEnd();
console.log(res);
