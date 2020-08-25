<template>
  <div v-if="Object.keys(comment).length !== 0" class="detail-comment">
    <div class="info-header">
      <span class="title">用户评价</span>
      <span class="more">
        更多
        <i class="arrow-right"></i>
      </span>
    </div>
    <div class="info-user">
      <img :src="comment.photo">
      <span class="user-name">{{comment.name}}</span>
    </div>
    <p class="info-content">{{comment.content}}</p>
    <div class="info-bottom">
      <span>{{comment.time | showTime}}</span>
      <span class="style">{{comment.style}}</span>
    </div>
  </div>
</template>

<script>
  import { formatDate } from '../../../common/utils'
  export default {
    name: "DetailComment",
    props: {
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showTime(value) {
        let date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 5px 12px;
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }

  .info-header {
    height: 50px;
    color: #333;
    line-height: 50px;
    position: relative;
  }

  .info-header .title {
    font-size: 15px;

  }

  .info-header .more {
    font-size: 13px;
    position: absolute;
    right: 10px;
  }

  .info-user {
    padding: 10px 0 5px;
    display: flex;
    align-items: center;
  }

  .info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .user-name {
    font-size: 15px;
    color: #333;
    margin-left: 10px;
  }

  .info-content {
    font-size: 14px;
    color: #777;
  }

  .info-bottom {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  
  .style {
    margin-left: 10px;
  }
</style>
