<template>
    <div class="layout">
        <div class="headarea">
            <blog-head class="bloghead"></blog-head>
        </div>
        <main class="mainarea">
            <router-view></router-view>
            <!--<blog-aside class="asidearea"></blog-aside>
            <blog-contain class="containarea"></blog-contain>-->
        </main>
        <footer>
            <blog-footer class="footerarea"></blog-footer>
        </footer>
    </div>
</template>

<script>
import blogHead from './components/blogHead'
import blogAside from './components/blogAside'
import blogContain from './components/blogContain'
import blogFooter from './components/blogFooter'
export default {
  name: 'main1',
  components: {
    blogHead,
    blogFooter
  }
}
</script>

<style lang="scss">
   .layout{
       width: 80%;
       margin: 0 auto;
       background-color: #eee;
       box-shadow: 0 0 3px 1px #ddd;
       .headarea{
           width: 100%;
           padding: 10px;
           box-sizing: border-box;
           border-bottom: 1px solid #ddd;
           .bloghead{
               width: 100%;
           }
       }
       .mainarea{
           width: 100%;
           display: flex;
           min-height: 100px;
           padding: 10px;
           box-sizing: border-box;
           /*background-color: white;*/
           /*.asidearea{
               flex: 0 0 200px;
               width: 200px;
               height: 200px;
               background-color: aqua;
           }
           .containarea{
               flex: 1;
               margin-left: 10px;
               height: 400px;
               background-color: chartreuse;
           }*/
       }
       .footerarea{
           width: 100%;
           height: 300px;
           background-color: beige;
       }
   }
</style>
