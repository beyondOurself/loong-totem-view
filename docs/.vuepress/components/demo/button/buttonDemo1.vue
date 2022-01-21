<template>
  <div>
    <div>
    <lg-button>Default</lg-button>
    <lg-button type="primary">Primary</lg-button>
    <lg-button type="success">Success</lg-button>
    <lg-button type="info">Info</lg-button>
    <lg-button type="warning">Warning</lg-button>
    <lg-button type="danger">Danger</lg-button>
    <lg-button @click="handleButtonClick">中文</lg-button>
    </div>
  <div>
     <lg-button plain>Plain</lg-button>
    <lg-button type="primary" plain>Primary</lg-button>
    <lg-button type="success" plain>Success</lg-button>
    <lg-button type="info" plain>Info</lg-button>
    <lg-button type="warning" plain>Warning</lg-button>
    <lg-button type="danger" plain>Danger</lg-button>

</div>

  <div>

    <lg-button round>Round</lg-button>
    <lg-button type="primary" round>Primary</lg-button>
    <lg-button type="success" round>Success</lg-button>
    <lg-button type="info" round>Info</lg-button>
    <lg-button type="warning" round>Warning</lg-button>
    <lg-button type="danger" round>Danger</lg-button>
</div>
 <div>
     <lg-button :icon="Search" circle></lg-button>
    <lg-button type="primary" :icon="Edit" circle></lg-button>
    <lg-button type="success" :icon="Check" circle></lg-button>
    <lg-button type="info" :icon="Message" circle></lg-button>
    <lg-button type="warning" :icon="Star" circle></lg-button>
    <lg-button type="danger" :icon="Delete" circle></lg-button>
    </div>
  </div>
</template>
<script lang='ts' setup>
const handleButtonClick = () => {
  console.log('>>>>')
}
</script>
