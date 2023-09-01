import * as postcss_px_to_viewport_wasm_plugin from "./pkg/postcss_px_to_viewport_wasm_plugin.js";

function convert_px_to_vw(str, options) {
  // options { viewportWidth,ignoreUnitCase,unitPrecision}
  const { viewportWidth, ignoreUnitCase, unitPrecision } = options;
  const options = new postcss_px_to_viewport_wasm_plugin.ConversionOptions(
    viewportWidth,
    ignoreUnitCase,
    unitPrecision
  );
  return postcss_px_to_viewport_wasm_plugin.convert_px_to_vw_with_options(str, options);
}
export { convert_px_to_vw };
