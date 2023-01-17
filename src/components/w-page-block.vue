<template>
  <div class="page-block" :style="styles" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w-page-block',
  props: {
    color: {
      type: String,
      default: 'bisque'
    },
    centered: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    styles() {
      return {
        'background-color': this.color
      }
    },
    classes() {
      return {
        'flex': this.centered,
        'column': this.centered,
        'justify-center': this.centered,
        'align-center': this.centered,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-block {
  height: 100vh;
}
</style>
