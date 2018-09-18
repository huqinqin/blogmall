<template>
    <div class="layout">
        <div class="headarea">
            <blog-head class="bloghead"></blog-head>
        </div>
        <main class="mainarea">
            <blog-aside class="asidearea"></blog-aside>
            <blog-contain class="containarea"></blog-contain>
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
        name: "main1",
        components: {
            blogHead,
            blogAside,
            blogContain,
            blogFooter
        }
    }
</script>

<style lang="scss">
   .layout{
       width: 80%;
       margin: 0 auto;
       .headarea{
           width: 100%;
           min-height: 100px;
           background-color: gray;
           .bloghead{
               width: 100%;
           }
       }
       .mainarea{
           width: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
           .asidearea{
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
           }
       }
       .footerarea{
           width: 100%;
           height: 300px;
           background-color: beige;
       }
   }
</style>