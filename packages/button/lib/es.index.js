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
const _hoisted_1 = /* @__PURE__ */ createTextVNode("this is Button ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_1
    ])
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Button.install = (app) => {
  app.component(Button.name, Button);
};
export { Button as default };
