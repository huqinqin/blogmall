<template>
    <div class="dropdown">
        <div class="catetitle"><span style="font-weight: bold">类目</span><i class="el-icon-arrow-down" @click="isShowCate"></i></div>
        <ul v-if="show">
            <li v-for="(item,index) in categoryList" :key="index" @mouseenter="backIndex(index)" @mouseout="hideItem">
                <span class="catelist" :class="currentIndex === index ? 'active' : ''"><span>{{item.value}}</span><i class="el-icon-arrow-right" v-if="item.childrens.length > 0"></i></span>
                <span class="childcate" v-if="currentIndex === index && item.childrens.length > 0"><span  v-for="(itemList,index) in item.childrens" :key="index">{{itemList}}</span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'dropDown',
  data () {
    return {
      categoryList: [
        {
          value: 'life',
          childrens: ['情感', '杂谈','情感', '杂谈']
        },
        {
          value: 'web',
          childrens: ['xinqing']
        }

      ],
        currentIndex: '0',
        show: false,
        showItem: false
    }
  },
    computed: {
    },
    methods: {
        backIndex (index) {
            this.currentIndex = index
            this.showItem = true
        },
        isShowCate() {
            this.currentIndex = '0'
            this.show = !this.show
        },
        hideItem() {
            this.showItem = false
        }
    }
}
</script>

<style lang="scss">
  .dropdown{
      width: 200px;
      text-align: center;
      border: 1px solid #ddd;
      position: fixed;
      z-index: 100;
      .catetitle{
          width: 100%;
          height: 40px;
          line-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee;
          span{
              flex: 0 0 150px;
          }
          i{
              flex: 1;
              height: 100%;
              line-height: 40px;
          }
      }
      ul{
          width: 100%;
          li{
              width: 100%;
              height: 40px;
              line-height: 40px;
              text-align: center;
              border-bottom: 1px solid #eee;
              .catelist{
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  span{
                     flex: 0 0 150px;
                  }
                  i{
                      flex: 1;
                      height: 100%;
                      line-height: 40px;
                  }
              }
              .active{
                  color: red;
                  font-size: 16px;
                  font-weight: bold;
              }
              .childcate{
                  position: absolute;
                  left: 201px;
                  top:0;
                  border: 1px solid #eee;
                  border-left: none;
                  writing-mode: vertical-lr;
                  height: 100%;
                  background-color: white;
                  span{
                      writing-mode: horizontal-tb;
                      text-align: center;
                      cursor: pointer;
                      float: left;
                      width: 100px;
                  }
              }
          }
      }
  }
</style>
