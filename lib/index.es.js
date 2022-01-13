import { defineComponent, openBlock, createElementBlock, renderSlot, createTextVNode } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "LgButton",
  props: {},
  setup(props) {
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("\u8FD9\u662F\u6309\u94AE");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_1$1
    ])
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
Button.install = (app) => {
  app.component(Button.name, Button);
};
const _sfc_main = defineComponent({
  name: "LgTag",
  props: {},
  setup(props) {
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u8FD9\u662Ftag");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_1
    ])
  ]);
}
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Tag.install = (app) => {
  app.component(Tag.name, Tag);
};
const version$1 = "0.0.0-development";
const version = version$1;
const components = [
  Button,
  Tag
];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
var index = {
  version,
  install
};
export { Button as LgButton, Tag as LgTag, index as default };
