<template>
    <div class="layout">
        <head class="headarea">
            <blog-head></blog-head>
        </head>
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

<style>
   /*.layout{
       min-width: 1200px;
       .headarea{
           width: 100%;
       }
       .mainarea{
           width: 100%;
           display: flex;
           .asidearea{
               flex: 0 0 200px;
               width: 200px;
           }
           .containarea{
               flex: 1;
               margin-left: 10px;
           }
       }
       .footerarea{
           width: 100%;
       }
   }*/
</style>