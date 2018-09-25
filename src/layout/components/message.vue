<template>
    <div class="message">
      <public-talk :title="title"></public-talk>
        <talk-list :title="title1"></talk-list>
    </div>
</template>

<script>
import publicTalk from '@/components/publicTalk'
import talkList from '@/components/talkList'
export default {
  name: 'message',
  components: {
    publicTalk,
    talkList
  },
  data () {
    return {
      title: '发表留言',
      title1: '留言列表'
    }
  }
}
</script>

<style scoped>

</style>
