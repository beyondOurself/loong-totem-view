import { App } from 'vue'
import config from './map.config.js'
import IconAccountBox11 from '~icons/mdi/account-box'
import car from './assets/custom-a/car-a.svg'
export default {
  install: (app) => {
    app.component("IconAccountBox11", IconAccountBox11)
    app.component("car", `<template>${car}</template>`)

    // for (const [name, icon] of Object.entries(config)) {
    //   app.component(name, IconAccountBox11 )
    // }
   }
}
