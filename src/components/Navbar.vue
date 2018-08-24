<template>
    <Menu mode="horizontal" :theme="theme" :class="isScrolled? 'scrolled':'nav'">
        <div class="logo">
        <img src="../../static/logo.png">
        </div>

        <div class="logo-phone">
        <span> IUCSSA </span>
        </div>
        <div class="item-group">
        <MenuItem name="1" to="/">
            <Icon type="md-home" />
            主页
        </MenuItem>
        <MenuItem name="2" to="/about">
            <Icon type="md-people" />
            关于
        </MenuItem>
        <MenuItem name="4">
            <Icon type="md-list" />
            事件
        </MenuItem>
        </div>

    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme: 'light',
                isScrolled:false
            }
        },
        name:"navbar",
        methods:{ 
            scrollHandler(){
                console.log("scrolled")
                var scrollTop = window.pageYOffset
                console.log(scrollTop)
                if(scrollTop > 120){
                    this.isScrolled = true
                }else{
                    this.isScrolled = false
                }
            }
        },
        mounted(){
            window.addEventListener('scroll',this.scrollHandler)
        }
    }
</script>

<style scoped>
.nav{
    display:flex;
    justify-content:flex-end;
    position:fixed;
    width:100%;
    height:80px;
    padding-top:18px;
    background:rgba(245,245,245,0);
    transition:0.2s;
}

.nav::after{
    display:none;
}

.logo{
    position:absolute;
    width:320px;
    max-height:100px;
    top:-8px;
    left:80px;
}

.logo img{
    width:100%;
}

.logo-phone{
    display:none;
}
.item-group{
    padding-right:100px;
}

.item-group *{
    font-size:1.2em;
}

.scrolled{
    display:flex;
    justify-content:flex-end;
    position:fixed;
    width:100%;
    height:80px;
    padding-top:18px;
    background:rgba(240,240,240,0.98);
    transition:0.1s;
    //box-shadow: 3px 1px 1px #7f7f7f
}

@media only screen and (max-width: 600px) {
    .item-group{
        display:none;
    }
    .logo{
        display:none;
    }
    .logo-phone{
        display:block;
        position:fixed;
        top:1.2%;
        left:5%;
        font-size:1.2em;
    }
}
</style>
