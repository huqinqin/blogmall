<template>
    <div class="blogfoot">
        <ul class="demo">
            <li class="demolist"><p>22222222222</p></li>
            <li class="demolist"><p>3333333</p></li>
            <li class="demolist"><p>444444</p></li>
            <li class="demolist"><p>5555555</p></li>
            <li class="demolist"><p>66666666</p></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'blogFooter'
}
</script>

<style lang="scss">
   .blogfoot{
       position: relative;
       .demo{
           position: absolute;
           height: 220px;
           width: 100%;
           writing-mode: vertical-lr;
           .demolist{
               float: left;
               width: 100px;
               writing-mode: horizontal-tb;
           }
       }
   }
</style>
