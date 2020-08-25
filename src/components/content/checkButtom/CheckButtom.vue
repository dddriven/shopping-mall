<template>
  <div class="CheckButtom" :class="{check: isCheck}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: "CheckBottom",
    props: {
      isCheck: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .CheckButtom {
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .check {
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>
