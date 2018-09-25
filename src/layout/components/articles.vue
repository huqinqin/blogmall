<template>
    <div class="articles">
        <div class="articleContent">
            <h3 class="title">ceshi</h3>
            <ul class="info">
                <li>
                    <span class="el-icon-date">2018-09-08</span>
                    <span class="el-icon-view">12</span>
                    <span class="el-icon-edit-outline">12</span>
                </li>
            </ul>
            <article class="content">
                <p>
                    erwrwerwrwerewtretryrtytryyryryryrtyryrtyryryryryryrjhhjdfkdshfkdjsnfjshfjshfjsdhfkshjghjgjgjgjhgjhgjgkjkgjhghhhjghjdhfkjksdfhnksadhfkasfhk
                </p>
            </article>
        </div>
        <div class="talk">
           <talk-list></talk-list>
        </div>
    </div>
</template>

<script>
    import talkList from '@/components/talkList'
    export default {
        name: "articles",
        data () {
            return{
            }
        },
        components: {
            talkList
        }
    }
</script>

<style lang="scss">
  .articles{
      .articleContent{
          .title{
              text-align: center;
              font-size: 16px;
              font-weight: bold;
          }
          .info{
              width: 100%;
              li{
                  text-align: center;
                  span{
                      margin-left: 20px;
                  }
              }
          }
          .content{
              width: 100%;
              word-break: break-word;
              p{
                  line-height: 20px;
                  text-indent: 8px;
              }
          }
      }
  }
</style>