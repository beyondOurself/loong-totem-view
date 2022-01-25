#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/index.vue <<EOF
<template>
  <div class="lg-${NAME}">
    <slot>this is ${NAME} </slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Lg${NAME}',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue'
import { SFCWithInstall } from '@loong-totem-view/utils/types'

import ${NAME} from './src/index.vue'

${NAME}.install = (app: App): void => {
  app.component(${NAME}.name, ${NAME})
}
const _${name} : SFCWithInstall<typeof ${name}> = ${name}
export default _${NAME}
EOF

cat > $DIRNAME/package.json <<EOF
{
  "name": "@loong-totem-view/$INPUT_NAME",
  "version": "0.0.0",
  "main": "./lib/umd.index.js",
  "license": "MIT",
  "files": [
    "lib"
  ],
  "module": "./lib/es.index.js",
  "exports": {
    ".": {
      "import": "./lib/es.index.js",
      "require": "./lib/umd.index.js"
    }
  },
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": " vue-tsc --noEmit && vite build --config ../../vite.config.ts --mode $INPUT_NAME",
    "build:watch": " vue-tsc --noEmit && vite build  --config ../../vite.config.ts --mode $INPUT_NAME",
    "clean": "rimraf lib"
  },
  "peerDependencies": {
    "vue": "^3.2.25"
  },
  "devDependencies": {
  }
}
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.spec.ts <<EOF
import { mount } from '@vue/test-utils'
import $NAME from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('$NAME.vue', () => {
  test('render test', () => {
    const wrapper = mount($NAME, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
EOF
