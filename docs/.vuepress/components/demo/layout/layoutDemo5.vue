<template>
  <lg-row class="row-bg">
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
  </lg-row>
  <lg-row class="row-bg" justify="center">
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
  </lg-row>
  <lg-row class="row-bg" justify="end">
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
  </lg-row>
  <lg-row class="row-bg" justify="space-between">
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
  </lg-row>
  <lg-row class="row-bg" justify="space-around">
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
  </lg-row>
</template>

<style>
.lg-row {
  margin-bottom: 20px;
}
.lg-row:last-child {
  margin-bottom: 0;
}
.lg-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
