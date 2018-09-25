<template>
    <div class="blogHead">
        <div class="imgWrap">
            <div class="headImg" @click="jumpHome"><img :src="img" alt=""></div>
        </div>
        <div class="btnseach">
            <el-input v-model="input" placeholder="请输入相关的文章名字" class="search"></el-input>
            <button  class="btn">Search</button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'blogHead',
  data () {
    return {
      img: require('@/assets/icon.jpg'),
      input: ''
    }
  },
  methods: {
    jumpHome () {
      this.$router.push({ name: 'mainContent' })
    }
  }

}
</script>

<style lang="scss">
   .blogHead{
       display: flex;
       align-items: center;
       justify-content: center;
       .imgWrap{
           cursor: pointer;
           width: 400px;
           flex: 0 0 400px;
           display: flex;
           justify-content: inherit;
           .headImg{
               width: 100px;
               height: auto;
               img{
                   width: 100%;
                   height: 100%;
               }
           }
       }
       .btnseach{
           position: relative;
           .search{
               flex: 1;
               .el-input__inner{
                   width: 500px;
               }
           }
           .btn{
               position: absolute;
               width: 100px;
               height: 40px;
               left: calc(100% - 100px);
               border: none;
           }
       }
   }
</style>
