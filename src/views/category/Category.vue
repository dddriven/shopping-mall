<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import Scroll from 'common/scroll/Scroll'

  import TabMenu from './childComps/TabMenu'
  import TabContentCategory from './childComps/TabContentCategory'

  import {getCategory, getSubcategory} from "network/category"

  export default {
    name: "Category",
    components: {
      NavBar,
      TabMenu,
      Scroll,
      TabContentCategory
    },
    data() {
      return {
        categories: [],
        currentIndex: -1,
        categoryData: {},
      }
    },
    created() {
      this.getCategory()
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      }
    },
    methods: {
      getCategory() {
        getCategory().then(res => {
          this.categories = res.data.category.list
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {}
            }
          }
          this.getSubcategories(0)
        })
      },
      selectItem(index) {
        this.getSubcategories(index)
      },
      getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
        })
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-size: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display:flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
</style>
