<template>
    <div class="blogfoot">
        <ul class="first">
                <li><a>www.baidu.com</a></li>
                <li><a>www.baidu.com</a></li>
                <li><a>www.baidu.com</a></li>
                <li><a>www.baidu.com</a></li>
        </ul>
        <ul class="second">
                <li><a>www.baidu.com</a></li>
                <li><a>www.baidu.com</a></li>
                <li><a>www.baidu.com</a></li>
                <li><a>www.baidu.com</a></li>
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
       display: flex;
       align-items: center;
       box-sizing: border-box;
       padding: 10px;
       .first{
           flex: 0 0 200px;
           li{
               line-height: 18px;
           }
       }
       .second{
           flex: 0 0 200px;
           li{
               line-height: 18px;
           }
       }
   }
</style>
