<template>
    <div class="topicJoin">
        <h3>{{title}}</h3>
        <join-article :articleItem="articleList"></join-article>
    </div>
</template>

<script>
    import joinArticle from '@/components/joinArticle'
    export default {
        name: "topicJoin",
        components: {
            joinArticle
        },
        data() {
            return{
                articleList: [{
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
                    title: 'web222',
                    content: 'vue3.0是一个很好用的前端框架，利用数据驱动视图，MVVM',
                    category: 'web',
                    time: '2018-09-09',
                    scan: 10,
                    talkNum: 100
                }],
                title: this.$route.params.title
            }
        }
    }
</script>

<style lang="scss">
.topicJoin{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    h3{
        font-size: 16px;
        font-weight: bold;
        text-indent: 10px;
        margin-bottom: 10px;
    }
}
</style>