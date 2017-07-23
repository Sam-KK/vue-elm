<template>
  <div id="app">
    <v-header></v-header>
    <ul class="tab">
      <router-link tag="li" class="tab-item" to="/goods"><a href="">商品</a></router-link>
      <router-link tag="li" class="tab-item" to="/ratings"><a href="">评价</a></router-link>
      <router-link tag="li" class="tab-item" to="/seller"><a href="">商家</a></router-link>
    </ul>
    <router-view></router-view>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
  import header from './components/header/header';

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    name: 'app',
    components: {
      'v-header': header
    }
  };
</script>

<style type="text/less" scoped lang="less">
  .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      a {
        display: block;
        text-align: center;
      }
      &.router-link-active {
        a {
          color: #35bd22;
        }
      }
    }
  }
</style>
