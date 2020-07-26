<template>
  <div class="pos">
    <el-row class="pos_content">
      <el-col :span="7" class="content_order">
        <el-tabs type="border-card">
          <el-tab-pane label="点餐">
            <template>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="goodsName" label="商品名称" width="120">
                </el-table-column>
                <el-table-column prop="count" label="量" width="80">
                </el-table-column>
                <el-table-column prop="price" label="金额" width="80">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template scope="scope">
                    <el-button type="text" @click="delSingleOrder(scope.row)"
                      >删除</el-button
                    >
                    <el-button type="text" @click="addTableData(scope.row)"
                      >增加</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </template>

            <div class="order_count">
              数量：<span>{{ totalCount }}</span>
              <br />
              总价：<span>{{ totalPrice }}元</span>
            </div>

            <div class="" style="margin-top: 50px">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delTotalOrder">删除</el-button>
              <el-button type="success" @click="payMoney">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17" class="content_detail">
        <div class="detail_goods">
          <div class="goods_title">常用商品</div>
          <div class="goods_tag">
            <el-tag
              type="info"
              class="tag_info"
              v-for="goods in oftenGoods"
              :key="goods.goodsId"
              @click="addTableData(goods)"
              ><span>{{ goods.goodsName }}</span>
              <span>￥{{ goods.price }}元</span></el-tag
            >
          </div>
        </div>
        <div class="detail_type">
          <el-tabs type="border-card" @tab-click="handleTabClick">
            <el-tab-pane label="汉堡" class="tab_pane">
              <div
                class="type_ham"
                v-for="(t, i) in typeGoods[index]"
                :key="i"
                @click="addTableData(t)"
              >
                <div class="ham_img">
                  <img :src="t.goodsImg" alt="" />
                </div>
                <div class="ham_info">
                  <span class="info_name">{{ t.goodsName }}</span
                  ><span class="info_price">￥{{ t.price }}元</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食" class="tab_pane"
              ><div
                class="type_ham"
                v-for="(t, i) in typeGoods[index]"
                :key="i"
                @click="addTableData(t)"
              >
                <div class="ham_img">
                  <img :src="t.goodsImg" alt="" />
                </div>
                <div class="ham_info">
                  <span class="info_name">{{ t.goodsName }}</span
                  ><span class="info_price">￥{{ t.price }}元</span>
                </div>
              </div></el-tab-pane
            >
            <el-tab-pane label="饮料" class="tab_pane"
              ><div
                class="type_ham"
                v-for="(t, i) in typeGoods[index]"
                :key="i"
                @click="addTableData(t)"
              >
                <div class="ham_img">
                  <img :src="t.goodsImg" alt="" />
                </div>
                <div class="ham_info">
                  <span class="info_name">{{ t.goodsName }}</span
                  ><span class="info_price">￥{{ t.price }}元</span>
                </div>
              </div></el-tab-pane
            >
            <el-tab-pane label="套餐" class="tab_pane"
              ><div
                class="type_ham"
                v-for="(t, i) in typeGoods[index]"
                :key="i"
                @click="addTableData(t)"
              >
                <div class="ham_img">
                  <img :src="t.goodsImg" alt="" />
                </div>
                <div class="ham_info">
                  <span class="info_name">{{ t.goodsName }}</span
                  ><span class="info_price">￥{{ t.price }}元</span>
                </div>
              </div></el-tab-pane
            >
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  data() {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: '香辣鸡腿堡',
          price: 18
        },
        {
          goodsId: 2,
          goodsName: '田园鸡腿堡',
          price: 15
        },
        {
          goodsId: 3,
          goodsName: '和风汉堡',
          price: 15
        },
        {
          goodsId: 4,
          goodsName: '快乐全家桶',
          price: 80
        },
        {
          goodsId: 5,
          goodsName: '脆皮炸鸡腿',
          price: 10
        },
        {
          goodsId: 6,
          goodsName: '魔法鸡块',
          price: 20
        },
        {
          goodsId: 7,
          goodsName: '可乐大杯',
          price: 10
        },
        {
          goodsId: 8,
          goodsName: '雪顶咖啡',
          price: 18
        },
        {
          goodsId: 9,
          goodsName: '大块鸡米花',
          price: 15
        },
        {
          goodsId: 20,
          goodsName: '香脆鸡柳',
          price: 17
        }
      ],
      typeGoods: [],
      // 保存tab栏被点击的索引
      index: 0,
      // 保存tab栏的名称
      tabs: ['汉堡', '小食', '饮料', '套餐']
    }
  },
  created() {
    // 调用获取常用商品的函数
    this.getOftenGoods()
    // 调用获取分类的函数
    this.getTypeData()
  },
  computed: {
    totalCount() {
      let sum = 0
      this.tableData.forEach(v => {
        sum = sum + v.count
      })
      return sum
    },
    totalPrice() {
      let tPrice = 0
      this.tableData.forEach(v => {
        tPrice = tPrice + v.count * v.price
      })
      return tPrice
    }
  },
  methods: {
    getOftenGoods() {
      this.$http
        .get('oftenGoods')
        .then(res => {
          console.log(res)
          this.oftenGoods = res.data.oftenGoods
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTypeData() {
      this.$http
        .get('typeGoods')
        .then(res => {
          console.log(res)
          this.typeGoods = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 处理tab被点击时触发的事件
    handleTabClick(e) {
      console.log(e)
      console.log(e.index)
      this.index = e.index
    },
    // 添加商品对象到表格数据中
    addTableData(goods) {
      // 0. 给传递过来的对象添加count属性
      // goods.count = 1
      // var arr = this.tableData

      console.log(goods)
      // 1. 判断该商品对象是否在表格数据中
      const isExist = this.tableData.some(item => {
        return item.goodsName === goods.goodsName
      })
      console.log(isExist)
      // 2. 如果在，在表格数据中找到商品对象并且将数量加1
      // 3. 如果不在，将商品对象push到表格数据中
      if (isExist) {
        console.log('cunzai')
        this.tableData.forEach(element => {
          if (element.goodsName === goods.goodsName) {
            // Vue 不能检测以下数组的变动：
            // 修改：当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
            // 删除：当你修改数组的长度时，例如：vm.items.length = newLength

            const index = this.tableData.indexOf(element)
            element.count++
            this.$set(this.tableData, index, element)
          }
        })
      } else {
        goods.count = 1
        this.tableData.push(goods)
        // this.tableData = arr
        // this.tableData = this.tableData
        // this.$set(this.tableData, this.tableData.length, goods)
      }
    },
    // 删除单个订单
    delSingleOrder(goods) {
      this.tableData = this.tableData.filter(v => {
        return v.goodsId !== goods.goodsId
      })
    },
    // 删除全部订单
    delTotalOrder() {
      // 提醒用户是否确认删除，并且有订单才能删除
      if (this.tableData.length) {
        this.$confirm('此操作将删除全部订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.tableData = []
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      } else {
        this.$message({
          type: 'info',
          message: '订单为空，怎么删除呢！'
        })
      }
    },
    // 结账函数
    payMoney() {
      if (this.tableData.length) {
        this.$message({
          message: '订单支付成功',
          type: 'success'
        })
        this.tableData = []
      } else {
        this.$message('订单为空，怎么支付呢！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pos {
  // float: left;
  // width: 100%;
  // display: inline-block;
  margin-left: 5%;
  background-color:white;
  height: 100%;
  .pos_content {
    height: 100%;
    // background-color: royalblue;
    .content_order {
      background-color: #eee;
      height: 100%;

      .order_count {
        margin-top: 20px;
        span {
          font-size: 20px;
          color: #eee;
        }
      }
    }

    .content_detail {
      // width: 100%;
      .detail_goods {
        background-color: #f9fafc;
        .goods_title {
          text-align: left;
          padding: 10px;
        }
        .goods_tag {
          display: flex;
          flex-wrap: wrap;
          .tag_info {
            width: 20%;
            margin: 5px 10px;
            font-size: 16px;
            color: black;
            background-color: #fff;
            overflow: hidden;
            cursor: pointer;
          }
        }
      }
      .detail_type {
        .tab_pane {
          display: flex;
          flex-wrap: wrap;
          .type_ham {
            width: 25%;
            display: flex;
            margin-top: 5px;
            cursor: pointer;
            .ham_img {
              width: 70%;
              img {
                width: 100%;
              }
            }
            .ham_info {
              width: 30%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .info_name {
                color: red;
              }
              .info_price {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
