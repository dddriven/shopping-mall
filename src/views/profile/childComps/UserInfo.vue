<template>
  <div id="user-info">
      <img src="~assets/img/common/u=34810726,4038794102&fm=26&gp=0.jpg">
      <span class="login-info">登录/注册</span>
  </div>
</template>

<script>
	export default {
		name: "UserInfo"
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
    display: flex;
    align-items: center;
  }

  #user-info img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  .login-info {
    color: #fff;
    margin-left: 10px;
  }
</style>
