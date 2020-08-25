<template>
	<div class="tabbar-item" @click="itemClick">
		<div class="icon" v-show="!isActive"><slot name="icon"></slot></div>
		<div class="icon-active" v-show="isActive"><slot name="icon_active"></slot></div>
		<div class="text" :style="activeStyle"><slot name="text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
    props: {
      link: {
        type: String,
        default: ''
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        return this.isActive ? {'color': 'red'} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
	}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
  }

  .icon img, .icon-active img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }

  .text {
    font-size: 12px;
    margin-top: 3px;
  }
</style>
