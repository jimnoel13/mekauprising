<template>
    <div>
        <div class="home-banner">
            <img src="../../public/images/lineartbanner-sharp.png">
            <div class="home-desc">
                <p class="banner-title text-light">mekauprising offers <br> to earn within our ecosystem.</p>
                <p :style="{'text-transform': 'uppercase', 'font-size': '12px', 'font-family': 'Sofia Pro', 'line-height': '20px', 'text-shadow': '-1px 1px 2px #3E3E3E'}" class="text-light">a player can choose the path in which they want to earn, the more resources players invest<br> within the ecosystemthe greater their potential rewards are.</p>
                <button class="button-orange">play demo</button>
            </div>
        </div>










        <!-- Desktop View -->
        <div class="col-md-12 col-lg-12 d-none d-sm none d-md-block d-lg-block" id="about">
            <div class="overview pb-0">
                    <div class="d-width">
                        <h1 class="title text-light text-center">Game Overview</h1>
                        <div
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                            <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                            <br>
                            <img src="../../public/images/mekaisometric.png" :style="{height: 'auto', width: '900px', display: 'block', 'margin': 'auto'}">
                            <div class="container">
                                <b-row class="div-row mt-3 mb-5" :style="{'height': '220px'}">
                                    <b-col cols="6" :style="{height: '220px'}">
                                        <img src="../../public/images/overview-pte.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                        <img src="../../public/images/overview-q.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                    </b-col>
                                    <b-col cols="6" :style="{height: '220px'}">
                                        <img src="../../public/images/overview-cl.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                        <img src="../../public/images/overview-wb.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                    </b-col>
                                </b-row>
                            </div>
                        </div>

                    </div>
            </div>

            <div class="d-width">
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
                                    <img class="d-block" :style="{width: '747px'}" src="../../public/images/meka-feature.png" alt="..." />
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
                                    <img class="d-block" :style="{width: '747px', 'margin-left': 'auto'}" src="../../public/images/treasure.png" alt="..." />
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
                                    <img class="d-block" :style="{width: '747px'}" src="../../public/images/snake.png" alt="..." />
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
            </div>
            
            <div class="d-width">
                <div class="game-players">
                    <img src="../../public/images/player.png" :style="{display: 'block', 'margin': 'auto', width: '1000px'}">
                </div>
            </div>

            <div class="d-width">
                <div class="game-roadmap">
                    <div class="bg">
                        <div class="position-relative">
                            <div class="line-bg1"></div>
                            <div class="line-bg2"></div>
                            <div class="line-bg3"></div>
                            <div class="line-bg4"></div>
                            <div class="line-bg5"></div>
                        </div>
                    </div>
                    <div class="content pt-5">
                        <div class="container pt-5">
                            <h1 class="title text-light text-center">Roadmap</h1>
                            <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                            <div class="roadmap-content">
                                
                                <div 
                                class="position-absolute phase1"
                                data-aos="fade-down"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <p :style="{background: '#90350e', height: '20px', width: '250px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 1</span>
                                    </p>
                                    <ul>
                                        <li>Conceptualization of Project</li>
                                        <li>Define Game Mechanics</li>
                                        <li>Meka Designs</li>
                                        <li>Website Launch</li>
                                        <li>Litepaper Release</li>
                                        <li>Community Contests & Giveaways</li>
                                        <li>Game Demo</li>
                                        <li>Social Media Ads</li>
                                        <li>Social Media Influencers</li>
                                        <li>Press Release Articles</li>
                                    </ul>
                                </div>

                                <div 
                                class="position-absolute phase2"
                                data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <p :style="{background: '#90350e', height: '20px', width: '250px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 2</span>
                                    </p>
                                    <ul>
                                        <li>Release the Team</li>
                                        <li>Token Staking</li>
                                        <li>Marketplace Partnership</li>
                                        <li>Guild Hall Presale</li>
                                        <li>Smart Contract Audits</li>
                                        <li>Meka Uprising Marketplace</li>
                                        <li>NFT Staking Mechanism</li>
                                        <li>Genesis Meka Early Assembly (Breeding)</li>
                                        <li>Genesis Meka Beta Gameplay Access</li>
                                        <li>Public Beta</li>
                                        <li>Release of Merch</li>
                                    </ul>
                                </div>

                                <div 
                                class="position-absolute phase3"
                                data-aos="fade-down"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <p :style="{background: '#90350e', height: '20px', width: '250px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 3</span>
                                    </p>
                                    <ul>
                                        <li>Conceptualization of Project</li>
                                        <li>Define Game Mechanics</li>
                                        <li>Meka Designs</li>
                                        <li>Website Launch</li>
                                        <li>Litepaper Release</li>
                                        <li>Community Contests & Giveaways</li>
                                        <li>Game Demo</li>
                                        <li>Social Media Ads</li>
                                        <li>Social Media Influencers</li>
                                        <li>Press Release Articles</li>
                                    </ul>
                                </div>

                                <div 
                                class="position-absolute phase4"
                                data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <p :style="{background: '#90350e', height: '20px', width: '250px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 4</span>
                                    </p>
                                    <ul>
                                        <li>NFT Staking Release</li>
                                        <li>$secondarytoken Launch</li>
                                        <li>Mobile App Launch</li>
                                        <li>DAO Establishment</li>
                                        <li>Addition of New Game Modes</li>
                                        <li>Release of Guilds</li>
                                        <li>Release of In-game Scholarshipsles</li>
                                    </ul>
                                </div>
                                
                                <img src="../../public/images/progress-roadmap.png" class="progressbar">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-width">
                <div class="game-integration">
                    <div class="container pb-5">
                        <h1 class="title text-light text-center">Tech Integrations</h1>
                        <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                        <br>
                        <div :style="{width: '420px', display: 'block', margin: 'auto'}">
                            <img src="../../public/images/bscscan.png" :style="{width: '200px', 'vertical-align': 'top'}">
                            <img src="../../public/images/moralis.png" fill="#FFFFFF" :style="{width: '220px', 'vertical-align': 'top', padding: '20px 20px'}">
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <!-- Mobile View -->
        <div class="col-sm-12 d-block d-sm-block d-md-none d-lg-none" id="about" :style="{width: '100%'}">
            <div class="overview pb-0">
                    <div class="m-width">
                        <h1 class="title text-light text-center">Game Overview</h1>
                        <div
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                            <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                            <br>
                            <img src="../../public/images/overview-img-mobile.png" :style="{height: 'auto', width: '100%', display: 'block', 'margin': 'auto'}">
                            <div class="container">
                                <b-row class="div-row mt-3 mb-5">
                                    <b-col
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    >
                                        <img src="../../public/images/overview-pte.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                    </b-col>
                                    <b-col
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    >
                                        <img src="../../public/images/overview-q.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                    </b-col>
                                    <b-col
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    >
                                        <img src="../../public/images/overview-cl.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                    </b-col>
                                    <b-col
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    >
                                        <img src="../../public/images/overview-wb.png" :style="{display: 'block', width: '400px', padding: '10px 0'}">
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </div>
            </div>

            <div class="m-width">
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
                                cols="12"
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <img class="d-block" :style="{width: '400px'}" src="../../public/images/meka-feature.png" alt="..." />
                                </b-col>
                                <b-col 
                                cols="12"
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
                                cols="12"
                                data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <img class="d-block" :style="{width: '400px', 'margin-left': 'auto'}" src="../../public/images/treasure.png" alt="..." />
                                </b-col>
                                <b-col 
                                cols="12"
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
                            </b-row>
                            <b-row class="div-row mt-3 mb-5" :style="{height: '600px'}">
                                <b-col
                                cols="12"
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                >
                                    <img class="d-block" :style="{width: '400px'}" src="../../public/images/snake.png" alt="..." />
                                </b-col>
                                <b-col
                                cols="12"
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
            </div>
            
            <div class="m-width">
                <div class="game-players">
                    <div
                    data-aos="fade-up-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-p1.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                    <div
                    data-aos="fade-up-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-p2.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                    <div
                    data-aos="fade-up-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-p3.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                    <div
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-mobile.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                    <div
                    data-aos="fade-up-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-p4.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                    <div
                    data-aos="fade-up-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-p5.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                    <div
                    data-aos="fade-up-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    >
                        <img src="../../public/images/player-p6.png" :style="{width: '260px', padding: '10px 0', display: 'block', margin: 'auto'}">
                    </div>
                </div>
            </div>

            <div class="m-width">
                <div class="game-roadmap">
                    <div class="bg">
                        <div class="position-relative">
                            <div class="line-bg1"></div>
                            <div class="line-bg2"></div>
                            <div class="line-bg3"></div>
                            <div class="line-bg4"></div>
                            <div class="line-bg5"></div>
                        </div>
                    </div>
                    <div class="content pt-5">
                        <div class="container pt-5">
                            <h1 class="title text-light text-center">Roadmap</h1>
                            <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                            <div class="roadmap-content">
                                
                                <div :style="{width: '300px', display: 'block', margin: 'auto'}">
                                    <p :style="{background: '#90350e', height: '20px', width: '300px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 1</span>
                                    </p>
                                    <ul>
                                        <li>Conceptualization of Project</li>
                                        <li>Define Game Mechanics</li>
                                        <li>Meka Designs</li>
                                        <li>Website Launch</li>
                                        <li>Litepaper Release</li>
                                        <li>Community Contests & Giveaways</li>
                                        <li>Game Demo</li>
                                        <li>Social Media Ads</li>
                                        <li>Social Media Influencers</li>
                                        <li>Press Release Articles</li>
                                    </ul>    
                                </div>

                                <div :style="{width: '300px', display: 'block', margin: 'auto'}">
                                    <p :style="{background: '#90350e', height: '20px', width: '300px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 2</span>
                                    </p>
                                    <ul>
                                        <li>Release the Team</li>
                                        <li>Token Staking</li>
                                        <li>Marketplace Partnership</li>
                                        <li>Guild Hall Presale</li>
                                        <li>Smart Contract Audits</li>
                                        <li>Meka Uprising Marketplace</li>
                                        <li>NFT Staking Mechanism</li>
                                        <li>Genesis Meka Early Assembly (Breeding)</li>
                                        <li>Genesis Meka Beta Gameplay Access</li>
                                        <li>Public Beta</li>
                                        <li>Release of Merch</li>
                                    </ul>
                                </div>

                                <div :style="{width: '300px', display: 'block', margin: 'auto'}">
                                    <p :style="{background: '#90350e', height: '20px', width: '300px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 3</span>
                                    </p>
                                    <ul>
                                        <li>Conceptualization of Project</li>
                                        <li>Define Game Mechanics</li>
                                        <li>Meka Designs</li>
                                        <li>Website Launch</li>
                                        <li>Litepaper Release</li>
                                        <li>Community Contests & Giveaways</li>
                                        <li>Game Demo</li>
                                        <li>Social Media Ads</li>
                                        <li>Social Media Influencers</li>
                                        <li>Press Release Articles</li>
                                    </ul>
                                </div>

                                <div :style="{width: '300px', display: 'block', margin: 'auto'}">
                                    <p :style="{background: '#90350e', height: '20px', width: '300px', 'margin': '0', position: 'relative'}">
                                        <span :style="{background: '#171617', 'position': 'absolute', top: '0', left: '5%', 'line-height': '20px', 'padding': '0 5px', 'text-transform': 'uppercase', 'font-family': 'Sofia Pro'}" class="text-light">Phase 4</span>
                                    </p>
                                    <ul>
                                        <li>NFT Staking Release</li>
                                        <li>$secondarytoken Launch</li>
                                        <li>Mobile App Launch</li>
                                        <li>DAO Establishment</li>
                                        <li>Addition of New Game Modes</li>
                                        <li>Release of Guilds</li>
                                        <li>Release of In-game Scholarshipsles</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-width">
                <div class="game-integration">
                    <div class="container pb-5">
                        <h1 class="title text-light text-center">Tech Integrations</h1>
                        <img src="../../public/images/ext.png" :style="{width: '20px', display: 'block', 'margin': 'auto'}">
                        <br>
                        <div :style="{width: '420px', display: 'block', margin: 'auto'}">
                            <img src="../../public/images/bscscan.png" :style="{width: '200px', 'vertical-align': 'top'}">
                            <img src="../../public/images/moralis.png" fill="#FFFFFF" :style="{width: '220px', 'vertical-align': 'top', padding: '20px 20px'}">
                        </div>
                    </div>
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
.banner-title{
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Sofia Pro';
    line-height: 40px;
    text-shadow: -2px 2px 2px #3E3E3E;
}

.d-width{
    width: 100%;
    overflow: hidden;
    margin: auto;
}

.title{
    font-family: 'Sofia Pro', sans-serif;
    font-size: 40px;
    text-transform: uppercase;
}

.home-banner {
    /*background: url('../../public/images/mekauprising-main-banner.png'); 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;*/
    position: relative;
    z-index: 0; 
    width: 100%; 
    height: 900px;
    margin: auto;
}

.home-banner img{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
}

.home-desc{
    position: absolute;
    top: 30%;
    left: 0;
    padding: 0 120px;

}

.overview{
    padding: 50px 0;
    width: 100%;
    margin: auto;
}

.game-features{
    position: relative;
    overflow: hidden;
    height: 2200px;
    width: 100%;
}

.game-features .bg{
    position: absolute;
    width: 250%;
    height: 2150px;
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
    height: 600px;
    width: 100%;
}

.game-roadmap{
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 1100px;
}

.game-roadmap .bg{
    position: absolute;
    width: 250%;
    height: 1000px;
    background-color: #171617;
    top: 0;
    left: -50px;
    transform: rotate(-2deg);
    z-index: 0;
    overflow: hidden;
}

.game-roadmap .bg .line-bg1{
    position: absolute;
    width: 20px;
    height: 400px;
    background-color: #303030;
    top: -120px;
    left: 18%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-roadmap .bg .line-bg2{
    position: absolute;
    width: 20px;
    height: 400px;
    background-color: #303030;
    top: -120px;
    left: 5%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-roadmap .bg .line-bg3{
    position: absolute;
    width: 20px;
    height: 550px;
    background-color: #303030;
    top: 350px;
    left: 15%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-roadmap .bg .line-bg4{
    position: absolute;
    width: 20px;
    height: 500px;
    background-color: #303030;
    top: 450px;
    left: 5%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-roadmap .bg .line-bg5{
    position: absolute;
    width: 20px;
    height: 400px;
    background-color: #303030;
    top: 400px;
    left: 40%;
    transform: rotate(-40deg);
    z-index: 1;
    border-radius: 20px;
}

.game-roadmap .content{
    z-index: 2;
    position: relative;
}

.game-roadmap .roadmap-content{
    height: 1000px;
    width: 100%;
}

.game-roadmap .roadmap-content .phase1{
    top: 20%;
    left: 20%;
}

.game-roadmap .roadmap-content .phase2{
    top: 63%;
    left: 35%;
}

.game-roadmap .roadmap-content .phase3{
    top: 20%;
    right: 35%;
}

.game-roadmap .roadmap-content .phase4{
    top: 63%;
    right: 20%;
}

.game-roadmap .roadmap-content ul{
    list-style-type: circle;
    padding: 10px 0 0 20px;
}

.game-roadmap .roadmap-content ul li{
    color: white;
    font-size: 12px;
}

.game-roadmap .progressbar{
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.bg-4 div h1.title{
    font-family: 'Sofia Pro', sans-serif; 
    padding-top: 50px; font-weight: bold;
}

.bg-4 div p.title-sub{
    font-family: 'Sofia Pro', sans-serif; 
    padding: 20px 330px;
}

@media only screen and (max-width: 600px){
    html,body{
        width: 100%;
        overflow: hidden;
    }

    .banner-title{
        text-transform: uppercase;
        font-size: 30px;
        font-family: 'Sofia Pro';
        line-height: 30px;
    }

    .m-width{
        width: 100%;
        overflow: hidden;
    }

    .home-banner {
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .home-banner img{
        height: 100%;
        width: 100%;
    }


    .home-desc{
        padding: 0 20px;
    }

    .overview{
        width: 100%;
        overflow: hidden;
    }

    .game-players{
        height: 1200px;
        width: 100%;
        overflow: hidden;
    }

    .game-features{
        width: 100%;
        overflow: hidden;
    }

    .game-roadmap{
        height: 1150px;
        width: 100%;
        overflow: hidden;
    }

    .game-roadmap .roadmap-content{
        height: 1000px;
        width: 100%;
        overflow: hidden;
    }

    .game-roadmap .bg{
        position: absolute;
        width: 250%;
        height: 1080px;
        background-color: #171617;
        top: 0;
        left: -50px;
        transform: rotate(-2deg);
        z-index: 0;
        overflow: hidden;
    }
}
</style>