<template>
    <div class="leftBar">
        <div id="header">
            <div style="margin:0 auto 0 auto;text-align:left;height:40px;">
                <div style="overflow:hidden;">
                    <div style="margin-left:30px;margin-top: 10px;float:left;">
                        <a href="/" class="name">爱斯园</a>
                    </div>
                    <div style="width: 18px;height: 18px;float: right;margin-top: 11px;margin-right: 10px;">
                        <img src="/shouqi.png" />
                    </div>
                </div>
            </div>
        </div>
        <ul>
            <li :class="{active: (currentIndex == 1)}"><router-link to="/main">我的工作台</router-link></li>
            <li><span></span></li>
            <li :class="{active: (currentIndex == 2)}"><router-link to="/main/project">GOOA Project</router-link></li>
            <li><span></span></li>
            <li :class="{active: (currentIndex == 3)}"><router-link to="/main/team/uh8rjki3/member/setting">团队配置中心</router-link></li>
            <li :class="{active: (currentIndex == 4)}"><router-link to="/main/team/uh8rjki3/project/setting">Project 配置中心</router-link></li>
            <li><span></span></li>
            <li :class="{active: (currentIndex == 5)}"><router-link to="/main/help">帮助中心</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                currentIndex: parseInt(this.tagIndex)
            };
        },
        props: ['tagIndex']
    };
</script>