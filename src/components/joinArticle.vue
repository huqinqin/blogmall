<template>
    <div class="joinArticle">
        <div class="articleIntro" v-for="(list,index1) in articleItem" :key="index1">
            <div class="img" @click="jump(list.id)"><img src="" alt=""></div>
            <div class="articleRight">
                <p class="title" @click="jump(list.id)">{{list.title}}</p>
                <p class="content1" @click="jump(list.id)">{{list.content}}</p>
                <p class="info">
                    <span class="el-icon-tickets">{{list.category}}</span>
                    <span class="el-icon-date">{{list.time}}</span>
                    <span class="el-icon-view">{{list.scan}}</span>
                    <span class="el-icon-edit-outline">{{list.talkNum}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'joinArticle',
  props: {
    articleItem: {
      default: () => {
        return []
      },
      type: Array
    }
  },
  methods: {
    jump (index) {
      this.$router.push({ name: 'articles', params: { id: index } })
    }
  }
}
</script>

<style lang="scss">
.joinArticle{
    .articleIntro{
        width: 100%;
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        background-color: white;
        margin-bottom: 10px;
        align-items: center;
        justify-content: center;
        .img{
            flex: 0 0 150px;
            width: 150px;
            img{
                width: 100%;
                height: 150px;
            }
        };
        .articleRight{
            margin-left: 10px;
            flex: 1;
            .title{
                font-size: 14px;
                font-weight: bold;
                border-bottom: 1px solid #eee;
                cursor: pointer;
            }
            .content1{
                width:100%;
                height: 100px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                font-size: 14px;
                text-indent: 4px;
                line-height: 30px;
                cursor: pointer;
            }
            .info{
                span{
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>
