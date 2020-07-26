<template>
  <div class="leftNav">
    <ul>
      <li>
        <i class="iconfont icon-shouyin"></i>
        <p>收银</p>
      </li>
      <li>
        <i class="iconfont icon-dianpu"></i>
        <p>店铺</p>
      </li>
      <li>
        <i class="iconfont icon-hanbao"></i>
        <p>商品</p>
      </li>
      <li>
        <i class="iconfont icon-huiyuan"></i>
        <p>会员</p>
      </li>
      <li>
        <i class="iconfont icon-tongji"></i>
        <p>统计</p>
      </li>
      <li>
        <i class="iconfont icon-shezhi"></i>
        <p>设置</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.leftNav {
  float: left;
  width: 5%;
  height: 100%;
  background-color: rgb(20, 134, 228);
  ul {
    li {
      list-style: none;
      color: white;
      font-size: 16px;
      height: 70px;

      display: flex;
      flex-direction: column;

      padding-top: 10px;
      border-bottom: 1px solid #eee;

      .iconfont {
        font-size: 24px;
      }
      p {
          margin-top: 5px;
      }
    }
  }
}
</style>
