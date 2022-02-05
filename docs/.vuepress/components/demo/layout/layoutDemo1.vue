<template>
  <lg-row>
    <lg-col :span="24"><div class="grid-content bg-purple-dark"></div></lg-col>
  </lg-row>
  <lg-row>
    <lg-col :span="12"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="12"><div class="grid-content bg-purple-light"></div></lg-col>
  </lg-row>
  <lg-row>
    <lg-col :span="8"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="8"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="8"><div class="grid-content bg-purple"></div></lg-col>
  </lg-row>
  <lg-row>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="6"><div class="grid-content bg-purple-light"></div></lg-col>
  </lg-row>
  <lg-row>
    <lg-col :span="4"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="4"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="4"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="4"><div class="grid-content bg-purple-light"></div></lg-col>
    <lg-col :span="4"><div class="grid-content bg-purple"></div></lg-col>
    <lg-col :span="4"><div class="grid-content bg-purple-light"></div></lg-col>
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
