// html_px_to_vw.ts

// 导出一个将像素（px）值转换为视窗宽度单位（vw）值的函数
export function convertPxToVw(
  input: string,
  viewportWidth: f64 = 750, // 默认视窗宽度为 750
  unitPrecision: i32 = 2 // 默认单元精度为 2
): string {
  let result = "";
  let i: i32 = 0;
  const len: i32 = input.length;

  while (i < len) {
    // 查找 px 值的开始
    const pxStart: i32 = input.indexOf("px", i);
    if (pxStart === -1) {
      // 如果没有找到 px 单位，将剩余部分添加到结果并结束循环
      result += input.substring(i);
      break;
    }

    // 查找 px 值的结束
    let pxEnd: i32 = pxStart - 1;
    while (pxEnd >= 0 && (isDigit(input.charCodeAt(pxEnd)) || input.charCodeAt(pxEnd) === 46)) {
      // 46 对应小数点 "."
      pxEnd--;
    }
    pxEnd++;

    // 将非 px 部分添加到结果
    result += input.substring(i, pxEnd);

    // 提取 px 值并将其转换为 vw 单位
    const pxValueStr: string = input.substring(pxEnd, pxStart);
    const pxValue: f64 = parseFloat(changetype<string>(pxValueStr));
    const vwValue: string = formatFloat(pxValue / viewportWidth * 100, unitPrecision) + "vw";

    // 添加转换后的值到结果
    result += vwValue;

    // 更新索引以跳过已处理的部分
    i = pxStart + 2; // 跳过 "px"
  }

  return result;
}

function isDigit(charCode: i32): bool {
  return (charCode >= 48 && charCode <= 57) || charCode === 46; // 46 对应小数点 "."
}

function formatFloat(value: f64, precision: i32): string {
  const multiplier: f64 = Math.pow(10, precision);
  const floatValue: f64 = Math.round(value * multiplier) / multiplier;
  return floatValue.toString();
}
