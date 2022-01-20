import { defineComponent, openBlock, createElementBlock, renderSlot, createTextVNode } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "LgButton",
  props: {},
  setup(props) {
  }
});
const _hoisted_1 = { class: "lg-button" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("1111\u5929\u7A7A\u6D77\u9614\u662F\u6B66\u8B66\u7F8E\u68A6\u4F60\u8BF4\u4F60\u6211\u6539\u53D8\u4E86");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_2
    ])
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Button.install = (app) => {
  app.component(Button.name, Button);
};
export { Button as default };
