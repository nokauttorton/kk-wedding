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
    backgroundImage: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: true
    },
    customHeight: {
      type: Boolean,
      default: false
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
        'background-image': this.backgroundImage,
        'page-block': !this.customHeight,
        'custom-height': this.customHeight
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-block {
  min-height: 100vh;
  flex-wrap: nowrap;
}
.background-image {
    background-image: url('../assets/background.jpg');
    background-size: cover;
}
</style>
