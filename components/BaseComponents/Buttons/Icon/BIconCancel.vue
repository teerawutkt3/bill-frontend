<template>
  <v-btn class="css-icon-cancel" :class="{'float-right': right}" x-small fab @click="click">
    <v-icon dark>
      mdi-cancel
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
.css-icon-cancel {
  color: #ffffff !important;
  /* background:linear-gradient(to right, #fb882c, #deb83c); */
  background:linear-gradient(to right, #9C27B0, #E040FB);
}
</style>
