<template>
    <div>

        <!-- Desktop View -->
        <div class="col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block">
            <div class="bg-footer-d">
                <b-container class="ps-5 pe-5 pt-3">
                    <b-row>
                        <b-col>
                            <div class="float-end">
                                <router-link to="/" class="footer-tab footer-tab-text-desktop">Meka Uprising</router-link>
                                <router-link to="/" class="footer-tab footer-tab-text-desktop">Our Vision</router-link>
                                <router-link to="/" class="footer-tab footer-tab-text-desktop">Game Features</router-link>
                                <router-link to="/" class="footer-tab footer-tab-text-desktop">Contact</router-link>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
                <b-container class="ps-5 pe-5 pt-5">
                    <b-row>
                        <b-col cols="6"></b-col>
                        <b-col cols="6">
                            <div class="float-end">
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'discord']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fas', 'globe']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'youtube']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fas', 'envelope']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'facebook']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'twitter']" class="brand-icon" /></a>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <b-container class="pt-3">
                <p class="text-center text-light">&copy; {{ new Date().getFullYear() }}, All rights reserved</p>
            </b-container>    
        </div>

        <!-- Mobile View -->
        <div class="col-sm-12 d-block d-sm-block d-md-none d-lg-none" id="about">
            <div class="bg-footer-m">
                <b-container class="ps-5 pe-5 pt-3">
                    <b-row>
                        <b-col>
                            <router-link to="/" class="footer-tab pb-3 pt-5 footer-tab-text-mobile">Meka Uprising</router-link>
                            <router-link to="/" class="footer-tab pb-3 footer-tab-text-mobile">Our Vision</router-link>
                            <router-link to="/" class="footer-tab pb-3 footer-tab-text-mobile">Game Features</router-link>
                            <router-link to="/" class="footer-tab pb-3 footer-tab-text-mobile">Contact</router-link>
                        </b-col>
                    </b-row>
                </b-container>
                <br>
                <br>
                <br>
                <b-container class="ps-5 pe-5">
                    <b-row>
                        <b-col>
                            <div class="float-end">
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'discord']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fas', 'globe']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'youtube']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fas', 'envelope']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'facebook']" class="brand-icon" /></a>
                                <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'twitter']" class="brand-icon" /></a>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <b-container class="pt-3 ">
                <p class="text-center text-light">&copy; {{ new Date().getFullYear() }}, All rights reserved</p>
            </b-container>    
        </div>

    </div>

</template>

<script>
    
</script>

<style scoped>
    .footer-tab{
        padding: 0 12px;
        text-transform: uppercase;
    }

    .bg-footer-d{
        background: #de4300;
        width: 100%;
        height: 230px;
        display: block;
        margin: auto;
    }

    .bg-footer-m{
        /*background: url('../../../public/images/footer-bg-mobile.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;*/
        background-color: #de4300;
        width: 100%;
        height: 450px;
        display: block;
        margin: auto;
    }

    .router-link-active{
        transition: all 0.3s ease-out;
        color: #FFFFFF; 
        text-shadow: -2px 2px 2px #3E3E3E;
        text-decoration: none;
    }

    .router-link-active:hover{
        transition: all 0.3s ease;
        color: #222222;
    }

    .brands:hover{
        transition: all 0.3s ease;
        color: #FFFFFF;
    }

    .brands{
        transition: all 0.3s ease-out;
        color: #bfbfbf;
    }

    .brand-icon{
        transition: all 0.3s ease-out;
        height: 40px;
        width: 40px;
        margin: 0 7px; 
        padding: 7px; 
        background-color: #070807; 
        border-radius: 50%;
        transition: all 0.3s ease;
        box-shadow: -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
        -webkit-box-shadow: -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
        -moz-box-shadow: -4px 4px 7px -5px rgba(155,155,155,0.76) inset;
    }

    .brand-icon:hover{
        transition: all 0.3s ease;
        box-shadow: -4px 4px 5px -1px #B33600, -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
        -webkit-box-shadow: -4px 4px 5px -1px #B33600, -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
        -moz-box-shadow: -4px 4px 5px -1px #B33600, -4px 4px 7px -5px rgba(155,155,155,0.76) inset;
        transform: scale(1.1);
    }

    .footer-tab-text-mobile{
        font-size: 25px;
        display: block;
        text-align: right;
    }

    .footer-tab-text-desktop{
        font-size: 25px;
    }

    @media only screen and (max-width: 600px){

        .brand-icon{
            transition: all 0.3s ease-out;
            height: 40px;
            width: 40px;
            margin: 0 7px; 
            padding: 7px; 
            background-color: #070807; 
            border-radius: 50%;
            transition: all 0.3s ease;
            box-shadow: -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
            -webkit-box-shadow: -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
            -moz-box-shadow: -4px 4px 7px -5px rgba(155,155,155,0.76) inset;
        }

    }
</style>