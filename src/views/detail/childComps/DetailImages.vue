<template>
  <div class="image-info" v-if="Object.keys(shopImages).length !== 0">
    <div class="image-info-desc">
      <div class="start"></div>
      <div class="desc">
        {{shopImages.desc}}
      </div>
      <div class="end"></div>
    </div>
    <div class="image-info-title">
      {{shopImages.detailImage[0].key}}
    </div>
    <div v-for="(item, index) in shopImages.detailImage[0].list"
        :key="index"
        class="image-info-photos">
      <img :src="item" @load="detailImgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailImages",
    props: {
      shopImages: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      detailImgLoad() {
        this.$emit('detailImageLoad')
      }
    }
  }
</script>

<style scoped>
  .image-info {
    padding: 20px 0;
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }

  .image-info-desc {
    padding: 0 15px;
  }

  .desc {
    padding: 15px 0;
  }

  .start, .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .start {
    float: left;
  }

  .end {
    float: right;
  }

  .start::before, .end::after {
    content: '';
    height: 5px;
    width: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
  }

  .end::after{
    right: 0;
  }

  .image-info-title {
    padding: 10px 0 10px 15px;
  }

  .image-info-photos img {
    width: 100%;
  }
</style>
