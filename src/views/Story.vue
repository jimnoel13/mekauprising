<template>
  <div class="story">
    <div class="landing-page-story">
        <div class="container pt-5 ps-5 pe-5 d-none d-sm none d-md-block d-lg-block">
            <div class="col ps-5 pe-5">
                <div class="col" :style="{padding: '0 60px'}">
                    <h1 class="text-sofia text-light" :style="{'text-align': 'left'}">World Setting</h1>
                    <p class="text-sofia text-light pt-3" :style="{'text-align': 'left'}">In the end, the Doomsday clock never got to strike midnight. It was Mother Nature that unleashed her wrath on us and our technology when it was too late to reverse our mistakes. The New Humans, as they would like to call themselves, banded together to salvage whatever was left of the Earth. They headed for Proxima b - the only guaranteed habitable planet we know - in Alpha Centauri, 4.24 light years away from Earth. They rid themselves of all the radioactive weapons that could destroy their new home, but kept the humanity that was destined to destroy their own kind. World War III was already set in motion, and the only trigger was the landing of the spaceship. The battle for land started as soon as the New Humans set foot on the surface of Titan.</p>
                </div>
                <div class="col" :style="{padding: '0 60px'}">
                    <h1 class="text-sofia text-light" :style="{'text-align': 'left'}">Nations</h1>
                    <p class="text-sofia text-light pt-3" :style="{'text-align': 'left'}">The New Humans soon divided themselves into primitive nations, drawing borders everywhere to claim the territories as their own.</p>
                    <div
                        :style="{width: 'unset', display: 'flex', 'flex-flow': 'column wrap', height: '700px', 'margin-top': '16px'}">
                        <div 
                            class="card bg-dark text-white mb-3" 
                            style="width: 18rem;"
                            v-for="nation in nations"
                            :key="nation.id"
                            >
                            <div class="card-body">
                                <p class="card-text"> 
                                    <span class="fw-bold fs-5">{{ nation.title }} </span>
                                    <br> 
                                    <span class="text-sofia" style="font-size: 12px;"> {{ nation.content }} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="margin: 0;">
                <div class="col" :style="{padding: '0 60px'}">
                    <h1 class="text-sofia text-light" :style="{'text-align': 'left'}">Mekas</h1>
                    <p class="text-sofia text-light pt-3" :style="{'text-align': 'left'}">In an attempt to create weapons with the least amount of biohazard, they turned to experimenting on animals. After years of genetic engineering, they managed to create Mekas - abominations that are half flesh, half metal. The Mekas were the driving force of the battle for land and power among the nations. Of course, that was before the Chimeras appeared.<br>There are 5 types of Mekas in total, each belonging to a nation and best suited for its home terrain.</p>
                    <div
                        :style="{width: 'unset', display: 'flex', 'flex-flow': 'column wrap', height: '1350px', 'margin-top': '16px'}">
                        <div 
                            class="card bg-dark text-white mb-3" 
                            style="width: 18rem;"
                            v-for="meka in mekas"
                            :key="meka.id"
                            >
                            <div class="card-body">
                                <p class="card-text"> 
                                    <span class="fw-bold fs-5">{{ meka.title }} </span>
                                    <br> 
                                    <span class="text-sofia" style="font-size: 12px;"> {{ meka.content }} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Story',
  data() {
    return {
        nations: [
            {id: '1', title: 'Berkfell', content: 'Situated on a flat plain near the edge of the Watercord Forest, Berkfell is currently the biggest nation in terms of territory. The Berkfellian are descendants of European old humans. Originating from countries of great power back on Earth, the Berkfellians are hostile people who pour their resources into military and technological research. They are currently the most troublesome soldiers to deal with.'},
            {id: '2', title: 'Vorican', content: 'Vorican spans across the foot of the Mithrim Montes. Its terrain is mostly rainforest. The people of Vorican, Vorics, came from old Earth tribes. They lead a simple agricultural, totemic society with deep-rooted traditions and hierarchies. The Vorics pay great respect to Mother Nature and fight with honor, commending the spirit of true warriors. '},
            {id: '3', title: 'Kabury', content: 'While Vorican lies at the foot of the Mithrim Montes, Kabury resides on its slope on the opposite end. This nation takes pride in being the closest to the sky - to the old Earth. The Kaburian are highly trained mechanics, who, due to living in high altitude, dedicate all their time to creating machines that fly and making the air their battlefield. They are the masters of the sky. '},
            {id: '4', title: 'Cadena', content: 'Cadena is an oasis in the middle of the Baston desert. While the climate is harsh - arid and hot in summer, ice cold in winter, there are valuable resources to be exploited. The Cadenese, warriors or civilians, are tough people that can adapt to any terrain and natural disaster thrown at them. They are the most adept at hand-to-hand combat and are feared all across the globe.'},
            {id: '5', title: 'Atlantis', content: 'Atlantis is an island country, which explains the name. This nation is surrounded by marine life and seemingly infinite resources to tap into. Atlanteans are descendants of people who love and fear the sea - marines, biologists, sailors. They stayed true to their past on Earth, and used it to their strengths. Atlanteans are experts at battling at sea, and thus put all their effort into developing technologies that are suited for the terrain. '},
            {id: '6', title: 'Brale', content: 'Brale is the only country who doesn’t take part in the war. It lies on the flat plain between Berkfell and Kabury. Bralics, the people of Brale, are pacifiers and merchants who have no wish to die in battle. The country is divided politically, as some are against it, while some see it as an opportunity to be the middleman and make money. They have offered a truce to all other nations in order to be left out of the war and live in peace.'}
        ],
        mekas: [
            {id: '1', title: 'Berserk', content: 'Berserk-type Mekas are majestic beasts brought to life by the Berkfellians. They come from the strongest predators of the savannah and the jungle. They are genetically engineered lions, wolves, sabertooths, bears, gorillas. They are known for their endurance, high speed and destructive fangs. What makes them even more deadly is that they hunt in packs, just like their ancestors.'},
            {id: '2', title: 'Relic', content: 'The Vorics, being the upholders of traditions and the old ways of life, have managed to harness the power of the ancient reptiles - dinosaurs. Relic-type Mekas have nigh-indestructible armors as well as deadly bites. While the Vorics have an armada of Velociraptors, Crocodiles, Komodo Dragons (and so many more), their ultimate weapon is the almighty T-rex Meka.'},
            {id: '3', title: 'Avian', content: 'Avian-type Mekas soar the skies of Kabury. They are winged beasts that attack from above. There are the Eagle and Falcon Mekas who specialize in attack, the Owl Mekas with sharp 360-degree visions used for probing, then there are Ostrich Mekas serving as transportation vehicles for the Kaburians. The Avian attack force is exceptionally tricky to handle. They dive down from an altitude to finish their opponents with their all-piercing sharp claws. Combined with their great speed, Avians are incredibly hard to take down.'},
            {id: '4', title: 'Exo', content: 'Exo-type Mekas are terrifying looking, 6-legged beasts that dwell in the desert of Cadena. They carry with them the venomous stings of the Scorpions and Wasps, the incredible strength and defense of the Hercules Beetle, the wings of the Fly, and the life draining bite of the Mosquito. Most of the Exo Mekas fight up high just like the Avians, although from a lower altitude. Some of them are even capable of traveling underground and trap their opponents from below. Besides their monstrous looks, they are also feared thanks to their diversity.'},
            {id: '5', title: 'Marine', content: 'Marine-type Mekas are the only machines to fight underwater - protecting Atlantis island. They, too, come in variety. Marine Mekas can pack the scorching punch of the Mantis Shrimp, the sharp bite of the Shark and the Angler Fish, the hard spear of the Swordfish, and last but not least, they carry the thick armor of the Sea Turtle. But don’t be fooled, Marines can fight on land, too. They are incredibly valuable assets of the Atlanteans, for they make way for foolproof strategies that incorporate multiple battlegrounds. You never know what lurks in the water.'},
            {id: '6', title: 'Null', content: 'Being the neutral nation that vows not to attack, Brale has to come up with the best defense possible. And so, they manufactured the strongest Mekas of all - the Null-type. Each Null-type Meka is a hybrid of different Meka types, making them highly unpredictable and exceptionally adept at dealing with any type of attackers. Combining multiple genes into one Mekas is almost an impossible feat, and thus the effort is more than rewarding. With a less than 5% chance, a Null-type Meka can mutate and take the shape of the Tardigrade, an indestructible creature that can be thrown into any environment. It is the absolute pride of the Bralics.'},
            {id: '7', title: 'Chimeras', content: 'Proxima b, the home of the New Humans, is tidally locked to its parent star. This means that half of the planet will always face the light, while the other is drenched in darkness and cold. No New Human lives in the Dark Zone, they only went there once, to dispose of the failed Meka prototypes. Having witnessed Brale’s success in creating hybrid Mekas, the other nations tried to follow suit. But all their experiments turned out to be disasters, the hybrid Mekas became aggressive and unstable, and eventually had to be put down. All of them were thrown into a huge pile in the Dark Zone. That was the New Humans’ biggest mistake. Little did they know, the Dark Zone is home to a dangerous parasite, which took over the dead hybrid Mekas’ bodies, shed the metal on their skin, and became what is now known as the Chimeras - the biggest threat mankind has ever witnessed. The Chimeras proceeded to mate and create even more monstrous offspring, who, after generations of evolution, grew to be gigantic in size and carry in them more power combinations than ever. And only having witnessed the appearance of the Chimera demons did the New Humans realize their mistakes, and ceased the World War. They finally banded together and commanded their Mekas to attack the mutual enemies.'}
        ]
    }
  }
}
</script>

<style scoped>
    .landing-page-story{
        background: url('https://www.illuvium.io/images/backgrounds/1440x900.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
</style>