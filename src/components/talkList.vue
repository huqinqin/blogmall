<template>
    <div class="talkList">
        <h2 class="talktitle" :class="icon">{{title}}</h2>
        <ul class="rate">
            <li v-for="(item, index) in talkList" :key="index">
                <div class="img"><img src="" alt=""></div>
                <div class="rateContent">
                    <p class="name">{{item.name}}</p>
                    <p class="content">{{item.content}}</p>
                    <p class="el-icon-date">{{item.time}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "talkList",
        props: {
            title: {
                default: '评论列表',
                type: String
            },
            icon: {
                default: 'el-icon-tickets',
                type: String
            },
            talkList: {
                default: () => {
                    return[
                        {
                            name: '正式',
                            content: '12dhfkdshfkjdhgkjfhgkjfdhgjdfkghkfdjghfdkjghfkjdghfdkjhgkfdjhgkdjhskjhdgkfghkfdghkfdjhgjdfhgjdhgjdfhgjd',
                            time: '2018-09-08'
                        }
                    ]
                },
                type: Array
            }
        },
        data() {
            return{}
        }
    }
</script>

<style lang="scss">
.talkList{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    .talktitle{
        text-indent: 10px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
    }
    .rate{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
            box-sizing: border-box;
            padding: 10px;
            margin-bottom: 10px;
            background-color: white;
            .img{
                flex: 0 0 100px;
                width: 100px;
                height: 100px;
                margin-right: 10px;
                border: 1px solid #eee;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .rateContent{
                flex: 1;
                .name{
                    font-size: 14px;
                }
                .content{
                    line-height: 18px;
                    max-height: 150px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-word;
                }
            }
        }
    }
}
</style>