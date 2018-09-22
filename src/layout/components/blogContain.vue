<template>
    <div class="homeContain">
        <div class="first">
            <div class="breadleft">
                <drop-down></drop-down>
                <div class="about">AboutMe</div>
            </div>
            <div class="breadright">
                <div class="signup">talk</div>
                <div class="signup">sign in</div>
                <div class="signup">sign up</div>
            </div>
        </div>
        <div class="block">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item, index) in articleList" :key="index" class="articlelist">
                    <h3>{{item.title}}</h3>
                    <ul>
                        <li class="articleIntro" v-for="(list,index1) in item.article" v-if="index1 < 2">
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
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import dropDown from '@/components/dropDown'
export default {
  name: 'blogContain',
  data() {
      return {
          articleList: [
              {
                  title: 'new',
                  article: [{
                      id: 1,
                      picture: '',
                      title: 'web',
                      content: 'vue是一个很好用的前端框架，利用数据驱动视图，MVVM',
                      category: 'web',
                      time: '2018-09-09',
                      scan: 10,
                      talkNum: 100
                  },{
                      id: 2,
                      picture: '',
                      title: 'web',
                      content: 'vue是一个很好用的前端框架，利用数据驱动视图，MVVM',
                      category: 'web',
                      time: '2018-09-09',
                      scan: 10,
                      talkNum: 100
                  }]
              },
              {
                  title: 'talk',
                  article: [{
                      id: 3,
                      picture: '',
                      title: 'web',
                      content: 'vue是一个很好用的前端框架，利用数据驱动视图，MVVM',
                      category: 'web',
                      time: '2018-09-08',
                      scan: 10,
                      talkNum: 100
                  },{
                      id: 4,
                      picture: '',
                      title: 'web',
                      content: 'vue是一个很好用的前端框架，利用数据驱动视图，MVVM',
                      category: 'web',
                      time: '2018-10-10',
                      scan: 10,
                      talkNum: 100
                  }]
              }
          ]
      }
    },
    methods: {
      jump (index) {
          this.$router.push({name: 'articles', params: {id: index}})
      }
    },
  components: {
    dropDown
  }
}
</script>

<style lang="scss">
    .homeContain{
        width: 100%;
        .first{
            display: flex;
            width: 100%;
            .breadleft{
                flex: 1;
                .about{
                    height: 40px;
                    line-height: 40px;
                    width: 100px;
                    text-align: center;
                    margin-left: 240px;
                    font-weight: bold;
                    font-size: 16px;
                }
            }
            .breadright{
                flex: 1;
                display: flex;
                font-size: 16px;
                font-weight: bold;
                justify-content: flex-end;
                .signin{
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                }
                .signup{
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                }
            }
        }
        .block{
            margin-top: 30px;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 14px;
                opacity: 0.75;
                line-height: 200px;
                margin: 0;
            }

            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .content{
            width: 100%;
             .articlelist{
                 margin-bottom: 10px;
                 h3{
                     width: 100%;
                     margin-bottom: 10px;
                     border-bottom: 1px solid #eee;
                 }
                 ul{
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
                             }
                             .info{
                                 span{
                                     margin-left: 20px;
                                 }
                             }
                         }
                     }
                 }

             }
        }
    }

</style>
