<template>
    <div>
        <div class="bg-footer">
            <b-container class="ps-5 pe-5 pt-3">
                <b-row>
                    <b-col cols="6"></b-col>
                    <b-col cols="6">
                        <div class="float-end">
                            <router-link to="/" class="footer-tab">Meka Uprising</router-link>
                            <router-link to="/" class="footer-tab">Our Vision</router-link>
                            <router-link to="/" class="footer-tab">Game Features</router-link>
                            <router-link to="/" class="footer-tab">Contact</router-link>
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
            <p class="text-center sofia text-light">&copy; {{ new Date().getFullYear() }}, All rights reserved</p>
        </b-container>





    </div>

</template>

<script>
    
</script>

<style scoped>
    .footer-tab{
        padding: 0 12px;
        font-family: 'Sofia Pro', sans-serif;
        text-transform: uppercase;
    }

    .bg-footer{
        background: url('../../../public/images/footer-bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 230px;
    }

    .router-link-active{
        transition: all 0.3s ease-out;
        color: #bfbfbf;
        text-decoration: none;
    }

    .router-link-active:hover{
        transition: all 0.3s ease;
        color: #FFFFFF;
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
        height: 35px;
        width: 35px;
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
    }
</style>