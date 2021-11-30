<template>
    <div class="bg-footer pt-5 pb-5">

        <!-- Desktop View -->
        <div class="col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block">
            <b-container class="ps-5 pe-5">
                <b-row>
                    <b-col cols="3">
                        <h1 class="text-light text-center text-sofia">Meka Uprising</h1>
                        <b-row>
                            <b-col>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">Staking</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">Illuviary</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">IlluviDex</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">Whitepaper</router-link>
                            </b-col>
                            <b-col>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">Governance</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">FAQ</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">Contributors</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia ms-3 d-block">Jobs</router-link>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="5"></b-col>
                    <b-col cols="4">
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'discord']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'twitter']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'youtube']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'medium']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'telegram']" class="brand-icon" /></a>
                        <h3 class="text-left text-sofia text-light mb-0 mt-3">Start your journey</h3>
                        <div class="container w-100 col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block p-0">
                            <div class="input-group mb-3 pt-1"><input class="form-control" type="email" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" style="height: 45px;" /><button class="w-25 button-shadow button-solid" type="button" id="button-addon2">REGISTER</button></div>
                        </div>
                        <div class="container w-100 col-sm-12 d-block d-sm-block d-md-none d-lg-none">
                            <div class="input-group mb-3 pt-3"><input class="form-control" type="email" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" style="height: 45px;" /><button class="w-25 button-shadow button-solid" type="button" id="button-addon2">REGISTER</button></div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Mobile View -->
        <div class="col-sm-12 d-block d-sm-block d-md-none d-lg-none">
            <b-container class="ps-5 pe-5">
                <b-row>
                    <b-col cols="12">
                        <h1 class="text-light text-sofia">Meka Uprising</h1>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'discord']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'twitter']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'youtube']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'medium']" class="brand-icon" /></a>
                        <a href="#" class="brands"><font-awesome-icon :icon="['fab', 'telegram']" class="brand-icon" /></a>
                    </b-col>
                    <b-col cols="12" class="pt-3">
                        <b-row>
                            <b-col>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">Staking</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">Illuviary</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">IlluviDex</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">Whitepaper</router-link>
                            </b-col>
                            <b-col>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">Governance</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">FAQ</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">Contributors</router-link>
                                <router-link to="/" class="mt-0 mb-0 text-sofia d-block">Jobs</router-link>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12"></b-col>
                </b-row>
            </b-container>
        </div>
    </div>

</template>

<script>
    
</script>

<style scoped>
    .bg-footer{
        /*background: linear-gradient(#343333 0%, #ef7b06 100%);*/
        background: #706d71;
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
        height: 35px;
        width: 35px;
        margin: 0 7px; 
        padding: 7px; 
        background-color: #241D6C; 
        border-radius: 50%;
        box-shadow: -4px 4px 5px -1px rgba(17,17,17,0.76), -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
        -webkit-box-shadow: -4px 4px 5px -1px rgba(17,17,17,0.76), -4px 4px 7px -5px rgba(155,155,155,0.76) inset; 
        -moz-box-shadow: -4px 4px 5px -1px rgba(17,17,17,0.76), -4px 4px 7px -5px rgba(155,155,155,0.76) inset;
    }
</style>