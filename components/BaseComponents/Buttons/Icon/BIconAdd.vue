<template>
  <v-btn class="css-icon-add" :class="{'float-right': right}" small fab @click="click">
    <v-icon dark>
      mdi-plus
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style>
.css-icon-add {
  color: #ffffff !important;
  background:linear-gradient(to right, #9C27B0, #E040FB);
}
</style>
