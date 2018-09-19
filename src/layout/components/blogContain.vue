<template>
    <div class="homeContain">
        <div class="breadleft">
            <drop-down></drop-down>
            <div class="about">AboutMe</div>
        </div>
        <div class="breadright">
            <div class="signin">sign in</div>
            <div class="signup">sign up</div>
        </div>
    </div>
</template>

<script>
import dropDown from '@/components/dropDown'
export default {
  name: 'blogContain',
  components: {
    dropDown
  }
}
</script>

<style lang="scss">
    .homeContain{
        display: flex;
        width: 100%;
        .breadleft{
            flex: 1;
            .about{
                height: 40px;
                line-height: 40px;
                width: 100px;
                text-align: center;
                margin-left: 240px;
                font-weight: bold;
                font-size: 16px;
            }
        }
        .breadright{
            flex: 1;
            display: flex;
            font-size: 16px;
            font-weight: bold;
            justify-content: flex-end;
            .signin{
                width: 100px;
                height: 40px;
                line-height: 40px;
            }
            .signup{
                width: 100px;
                height: 40px;
                line-height: 40px;
            }
        }
    }

</style>
