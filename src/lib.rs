mod utils;

use regex::Regex;
use wasm_bindgen::prelude::*;
use js_sys::Number; 

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct ConversionOptions {
    prototype_width: f64,
    ignore_case: bool,
    conversion_precision: usize,
}

#[wasm_bindgen]
impl ConversionOptions {
    #[wasm_bindgen(constructor)]
    pub fn new(prototype_width: f64, ignore_case: bool, conversion_precision: usize) -> Self {
        Self {
            prototype_width,
            ignore_case,
            conversion_precision,
        }
    }

    pub fn prototype_width(&self) -> f64 {
        self.prototype_width
    }

    pub fn ignore_case(&self) -> bool {
        self.ignore_case
    }

    pub fn conversion_precision(&self) -> usize {
        self.conversion_precision
    }
}

#[wasm_bindgen]
pub fn convert_px_to_vw_with_options(html_str: &str, options: &ConversionOptions) -> String {
    // 根据 ignore_case 选项创建适当的正则表达式
    let mut re_flags = regex::RegexBuilder::new(r"([\d.]+)px");
    if options.ignore_case {
        re_flags.case_insensitive(true);
    }
    let re = re_flags.build().unwrap();

    let converted = re.replace_all(html_str, |caps: &regex::Captures| {
        if let Some(px_value) = caps.get(1) {
            let px_value: f64 = px_value.as_str().parse().unwrap();
            let vw_value = (px_value / options.prototype_width) * 100.0; // 转换为 vw 单位
            format!("{:.1$}vw", vw_value, options.conversion_precision)
        } else {
            caps[0].to_string()
        }
    });

    converted.to_string()
}
