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
    export default {
        name: "main"
    }
</script>

<style lang="scss">
   .layout{
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
   }
</style>