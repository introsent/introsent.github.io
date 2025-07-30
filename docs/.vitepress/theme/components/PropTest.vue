<template>
  <div style="border: 3px solid purple; padding: 20px; margin: 20px 0">
    <h3>Prop Test Component</h3>
    <p>Message: {{ message }}</p>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, default: "No message" },
    count: { type: Number, default: 0 }
  },
  mounted() {
    console.log('PropTest mounted with:', this.$props)
  }
}
</script>