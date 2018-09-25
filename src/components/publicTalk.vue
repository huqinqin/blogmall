<template>
    <div class="publicTalk">
        <h3 :class="icon">{{title}}</h3>
        <div id="content"></div>
        <div class="submit1">
            <el-button type="primary" class="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'publicTalk',
  props: {
    icon: {
      default: 'el-icon-edit-outline',
      type: String
    },
    title: {
      default: '发表评论',
      type: String
    }
  },
  data () {
    return {
      editContent: ''
    }
  },
  mounted () {
    var editor = new E('#content')
    editor.customConfig.onchange = (html) => {
      this.editContent = html
      console.log(html)
    }
    editor.customConfig.linkImgCallback = function (url) {
      console.log(url) // url 即插入图片的地址
    }
    editor.create()
  }
}
</script>

<style lang="scss">
.publicTalk{
    width: 100%;
    h3{
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
        text-indent: 10px;
        margin-bottom: 10px;
    }
    #content{
        margin-bottom: 10px;
    }
    .submit1{
        text-align: center;
        .submit{
            margin-bottom: 10px;
        }
    }
}
</style>
