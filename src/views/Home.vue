<template>
    <div>
        <div class="home-banner">
            <div class="home-desc">
                <p :style="{'text-transform': 'uppercase', 'font-size': '40px', 'font-family': 'Sofia Pro', 'line-height': '40px'}" class="text-light">mekauprising offers <br> to earn within our ecosystem.</p>
                <p :style="{'text-transform': 'uppercase', 'font-size': '12px', 'font-family': 'Sofia Pro', 'line-height': '20px'}" class="text-light">a player can choose the path in which they want to earn, the more resources players invest<br> within the ecosystemthe greater their potential rewards are.</p>
                <button class="button-orange">play to earn</button>
            </div>
        </div>

        <!-- About -->
        <!-- Desktop View -->
        <div class="col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block" id="about">
            <div class="overview pb-0">
                <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                >
                    <div class="container">
                        <h1 class="title text-light text-center">Game Overview</h1>
                        <img src="../../public/images/overview.png" :style="{height: 'auto', width: '1000px', display: 'block', 'margin': 'auto'}">
                    </div>
                </div>
            </div>

            <div class="game-features">
                <div class="bg"></div>
                <div class="line-bg1"></div>
                <div class="line-bg2"></div>
                <div class="line-bg3"></div>
                <div class="line-bg4"></div>
                <div class="line-bg5"></div>
                <div class="content pt-5">
                    <div class="container pt-5">
                        <h1 class="title text-light text-center">Game Features</h1>
                        <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                    </div>
                    <div class="pt-5">
                        <b-row class="div-row mt-3 mb-5" :style="{height: '600px'}">
                            <b-col 
                            cols="6"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            >
                                <img class="d-block w-100" src="../../public/images/coin.png" alt="..." />
                            </b-col>
                            <b-col 
                            cols="6"
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            >
                                <div class="ps-5 pe-5">
                                    <h1 class="text-light title">Meka NFT</h1>
                                    <p class="text-light pt-3 landing-page-sub-desc">TBA The first 8,000 NFTs will become the rarest Meka to exist. These limited edition “Genesis Gunbound” will feature exclusive traits, low ID numbers, ‘seed’ meta tag, and more. Additionally, Genesis NFT owners will receive extra airdrop rewards and will have access to VIP events such as pre-launch “breeding”, beta gameplay, and much more. TOKEN</p>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="div-row mt-3 mb-5" :style="{height: '600px'}">
                            <b-col 
                            cols="6"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            >
                                <div class="ps-5 pe-5">
                                    <h1 class="text-light title">Meka Token IDO</h1>
                                    <p class="text-light pt-3 landing-page-sub-desc">TBA We will be holding an IDO community members will be given the chance to “invest” in our game. We believe that small/retail investors are key to having a successful NFT project. Shortly after the IDO, the token will be listed on DEXs, the date and platform is yet to be announced.</p>
                                </div>
                            </b-col>
                            <b-col
                            cols="6"
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            >
                                <img class="d-block w-100" src="../../public/images/treasure.png" alt="..." />
                            </b-col>
                        </b-row>
                        <b-row class="div-row mt-3 mb-5" :style="{height: '600px'}">
                            <b-col
                            cols="6"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            >
                                <img class="d-block w-100" src="../../public/images/snake.png" alt="..." />
                            </b-col>
                            <b-col
                            cols="6"
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            >
                                <div class="ps-5 pe-5">
                                    <h1 class="text-light title">Land Sale</h1>
                                    <p class="text-light pt-3 landing-page-sub-desc">TBA Land plots will be sold to early-bird community members. These NFT properties will include exclusive land items, and other benefits</p>
                                </div>
                            </b-col>
                        </b-row> 
                    </div>
                </div>   
            </div>
            
            <div class="game-players">

            </div>

            <div class="game-roadmap">
                <div class="bg"></div>
                <div class="content pt-5">
                    <div class="container pt-5">
                        <h1 class="title text-light text-center">Roadmap</h1>
                        <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                    </div>
                </div>
            </div>

            <div class="game-integration">
                <div class="container">
                    <h1 class="title text-light text-center">Tech Integrations</h1>
                    <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                </div>
            </div>

        </div>

    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {}
    }
</script>

<style scoped>
.title{
    font-family: 'Sofia Pro', sans-serif;
    font-size: 40px;
    text-transform: uppercase;
}

.home-banner {
    background: url('../../public/images/mekauprising-main-banner.png'); 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    z-index: 0; 
    width: 100%; 
    height: 900px;
}

.home-desc{
    position: absolute;
    top: 30%;
    left: 0;
    padding: 0 120px;

}

.overview{
    padding: 50px 100px;
}

.game-features{
    position: relative;
    overflow: hidden;
    height: 2200px;
}

.game-features .bg{
    position: absolute;
    width: 250%;
    height: 2100px;
    background-color: #171617;
    top: 0;
    left: -50px;
    transform: rotate(-2deg);
    z-index: 0;
}

.game-features .line-bg1{
    position: absolute;
    width: 20px;
    height: 500px;
    background-color: #303030;
    top: 2%;
    left: 18%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-features .line-bg2{
    position: absolute;
    width: 20px;
    height: 500px;
    background-color: #303030;
    top: 20%;
    left: 9%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-features .line-bg3{
    position: absolute;
    width: 20px;
    height: 500px;
    background-color: #303030;
    top: 30%;
    right: 0;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-features .line-bg4{
    position: absolute;
    width: 20px;
    height: 500px;
    background-color: #303030;
    top: 50%;
    right: 50%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-features .line-bg5{
    position: absolute;
    width: 20px;
    height: 500px;
    background-color: #303030;
    top: 60%;
    left: 30%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-features .content{
    z-index: 2;
    position: relative;
}

.game-players{
    height: 1000px;
}

.game-roadmap{
    position: relative;
    overflow: hidden;
    height: 1000px;
}

.game-roadmap .bg{
    position: absolute;
    width: 250%;
    height: 900px;
    background-color: #171617;
    top: 0;
    left: -50px;
    transform: rotate(-2deg);
    z-index: 0;
}

.game-roadmap .content{
    z-index: 2;
    position: relative;
}

.bg-4 div h1.title{
    font-family: 'Sofia Pro', sans-serif; 
    padding-top: 50px; font-weight: bold;
}

.bg-4 div p.title-sub{
    font-family: 'Sofia Pro', sans-serif; 
    padding: 20px 330px;
}
</style>