<template>
  <v-card color="#e5dce7">
    <v-card-text>
      <div>{{ title }}</div>
      <h2>{{ description }}</h2>
      <p>{{ amount }}</p>
      <b-pay :click="click" />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'description'
    },
    amount: {
      type: Number,
      default: 0
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
