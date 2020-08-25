<template>
  <div>
    <nav-bar>
      <img slot="left" src="~assets/img/common/back.svg" class="image" @click="backClick">
      <div slot="center" class="center">
        <span v-for="(item, index) in titles"
              :key="index"
              @click="navClick(index)"
              :class="{active: index === currentIndex}">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.go(-1)
      },
     navClick(index) {
       this.currentIndex = index
       this.$emit('titleClick', index)
     }
    }
  }
</script>

<style scoped>
  .image {
    margin-top: 12px;
  }

  .center {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    font-size: 14px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
