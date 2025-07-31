<template>
  <div class="container">
    <iframe
        :src="embedUrl"
        :style="iframeStyle"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    modelId: {
      type: String,
      default: "29c270eff3c44df5ab2db695dde6022f"
    },
    height: {
      type: Number,
      default: 500
    }
  },
  computed: {
    embedUrl() {
      return `https://sketchfab.com/models/${this.modelId}/embed`
    },
    iframeStyle() {
      return {
        width: '100%',
        height: `${this.height}px`
      }
    }
  },
  mounted() {
    console.log('[SketchfabViewer] Component mounted:', this.$props)
  }
}
</script>

<style scoped>
.container {
  margin: 20px 0;
}

.debug {
  background: #f0f8ff;
  padding: 15px;
  margin-top: 10px;
}
</style>