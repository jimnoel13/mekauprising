<template>
    <div>
        <div class="landing">
            <div class="landing-inside">
                <img src="../../public/images/mekauprising-logo.png">
                <p class="sub-logo"></p>
                <div class="d-flex justify-content-center">
                    <button class="register button-shadow">Register</button>
                    <button class="button-shadow"><font-awesome-icon icon="play-circle" size="lg"/> Trailer</button>
                </div>
            </div>
            <div class="bg-1"></div>
            <div class="bg-2"></div>
            <div class="bg-3"></div>
            <div class="bg-4"></div>
            <div class="bg-5"></div>
            <div class="bg-6">
                <img src="../../public/images/char.png" :style="{width: '100%'}">
            </div>
            <div class="bg-7">
                <!-- Desktop View -->
                <div class="col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block landing-page-container-desc" id="about" :style="{'margin-top': '900px'}">
                    <div
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <div class="container">
                            <h1 class="title text-light text-center">Welcome to Meka Uprising</h1>
                            <p class="title-sub text-light text-center">An open-world RPG adventure game built on the Ethereum Blockchain. Journey across a vast and varied landscape on your quest to hunt and capture deity-like creatures called Illuvials. Discover the cause of the cataclysm that shattered this land.</p>
                        </div>
                        <div class="d-flex justify-content-center pb-5">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" :style="{height: '382px', width: '710px'}">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../../public/images/330474.jpg" class="d-block" alt="First Image" :style="{height: '382px', width: '710px'}">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../public/images/330481.jpg" class="d-block" alt="Second Image" :style="{height: '382px', width: '710px'}">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../public/images/330495.png" class="d-block" alt="Third Image" :style="{height: '382px', width: '710px'}">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div 
                        data-aos="fade-down"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                        <b-container class="landing-page-sub-padding">
                            <b-row class="div-row" :style="{height: '500px'}">
                                <b-col cols="5">
                                    <h1 class="text-light landing-page-sub-title">Build the perfect team</h1>
                                    <p class="text-light pt-3 landing-page-sub-desc">Draft your starters. Challenge to be the best. Outsmart and counter your opponents strategically to place rank in competition. Earn $ILV through play, and become part of our community-based governance.</p>
                                </b-col>
                                <b-col cols="7">
                                    <img class="d-block w-100 shadow-2" src="../../public/images/330495.png" alt="..." />
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div 
                        data-aos="fade-down"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                        <b-container class="landing-page-sub-padding">
                            <b-row class="div-row" :style="{height: '500px'}">
                                <b-col cols="7">
                                    <img class="d-block w-100 shadow-2" src="../../public/images/330481.jpg" alt="..." />
                                </b-col>
                                <b-col cols="5">
                                    <h1 class="text-light landing-page-sub-title">Build the perfect team</h1>
                                    <p class="text-light pt-3 landing-page-sub-desc">Draft your starters. Challenge to be the best. Outsmart and counter your opponents strategically to place rank in competition. Earn $ILV through play, and become part of our community-based governance.</p>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div 
                        data-aos="fade-down"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                        <b-container class="landing-page-sub-padding">
                            <b-row class="div-row" :style="{height: '500px'}">
                                <b-col cols="5">
                                    <h1 class="text-light landing-page-sub-title">Build the perfect team</h1>
                                    <p class="text-light pt-3 landing-page-sub-desc">Draft your starters. Challenge to be the best. Outsmart and counter your opponents strategically to place rank in competition. Earn $ILV through play, and become part of our community-based governance.</p>
                                </b-col>
                                <b-col cols="7">
                                    <img class="d-block w-100 shadow-2" src="../../public/images/330474.jpg" alt="..." />
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </div>
            </div>
        </div>



        <!-- <div class="text-light pt-5 pb-5 bg-252525">
            <h1 class="text-center text-sofia">Our partners</h1>
            <div class="w-75 mx-auto">
                <img src="https://www.illuvium.io/images/homepage-content/our-partners.png" class="w-100 ps-3 pe-3">
            </div>
        </div> -->



        <!-- <div class="text-light pt-5 pb-5 bg-252525">
            <h1 class="text-center">Are you ready to start your journey?</h1>

            <div class="container w-40 col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block">
                <div class="input-group mb-3 pt-3"><input class="form-control" type="email" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" style="height: 45px;" /><button class="w-25 button-shadow button-solid" type="button" id="button-addon2">REGISTER</button></div>
            </div>

            <div class="container w-100 col-sm-12 d-block d-sm-block d-md-none d-lg-none">
                <div class="input-group mb-3 pt-3"><input class="form-control" type="email" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" style="height: 45px;" /><button class="w-25 button-shadow button-solid" type="button" id="button-addon2">REGISTER</button></div>
            </div>
        </div> -->
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {}
}
</script>

<style scoped>
    .bg-1 {
        background: url('../../public/images/mu-banner-bg1.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        position: absolute;
        z-index: 1; 
        width: 100%; 
        height: 854px; 
        top: 0; 
        left: 0;
    }
    .bg-2 {
        background: url('../../public/images/mu-banner-bg2.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        position: absolute;
        z-index: 2; 
        width: 100%; 
        height: 854px; 
        top: 0; 
        left: 0;
    }
    .bg-3 {
        background: url('../../public/images/mu-banner-bg3.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        position: absolute;
        background-attachment: fixed;
        z-index: 3; 
        width: 100%; 
        height: 854px; 
        top: 0; 
        left: 0;
    }
    .bg-4 {
        background: url('../../public/images/mu-banner-bg4.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        position: absolute;
        background-attachment: fixed;
        z-index: 4; 
        width: 100%; 
        height: 854px; 
        top: 0; 
        left: 0;
    }
    .bg-5 {
        background: url('../../public/images/mu-banner-bg5.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        position: absolute;
        background-attachment: fixed;
        z-index: 5; 
        width: 100%; 
        height: 854px; 
        top: 0; 
        left: 0;
    }
    .bg-6 {
        background: url('../../public/images/mu-banner-bg6.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        position: absolute;
        z-index: 6; 
        width: 100%; 
        height: 854px; 
        top: 0; 
        left: 0;
    }
    .bg-7 {
        background: url('../../public/images/mu-banner-bg7.png'); 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        background-attachment: fixed;
        position: absolute;
        z-index: 0; 
        width: 100%; 
        height: 3000px; 
        top: 0; 
        left: 0;
    }


    .landing {
      height: 3000px; 
      position: relative;
    }

    .landing-inside{
        margin: 0; 
        position: absolute; 
        top: 8%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        padding: 15px 0;
        z-index: 7;
    }

    .landing-inside button{
        transition: all 0.3s ease-out;
        background: transparent;
        color: white;
        font-weight: bold;
        border: 2px solid white;
        display: inline-block;
        height: 50px; 
        width: 160px; 
        margin-right: 10px;
        font-family: 'Sofia Pro', sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        text-shadow: 2px 2px 4px #000000;
    }

    .landing-inside button:last-child{
        margin-left: 10px;
    }

    .landing-inside img{
        margin: auto;
        display: block;
    }

    .landing-inside button.register{
        transition: all 0.3s ease-out;
        background: linear-gradient(76.91deg, #706d71 -125.56%, #00abdf 116.11%);
        color: white;
        font-weight: bold;
        border: none;
    }

    .landing-inside p{
        text-align: center;
        font-weight: bold;
        color: white;
        font-family: 'Sofia Pro', sans-serif;
        margin: 0;
    }

    .landing-inside p.logo{
        font-size: 60px;
    }

    .landing-inside p.sub-logo{
        font-size: 30px;
        margin-bottom: 20px;
    }

    /*.landing-page-container-desc{
        background: url('https://www.illuvium.io/images/backgrounds/1440x900.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }*/

    .bg-4 div h1.title{
        font-family: 'Sofia Pro', sans-serif; 
        padding-top: 50px; font-weight: bold;
    }

    .bg-4 div p.title-sub{
        font-family: 'Sofia Pro', sans-serif; 
        padding: 20px 330px;
    }
</style>