<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
    },
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(message, duration) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .75);
    color: #fff;
    z-index: 9;
  }
</style>
