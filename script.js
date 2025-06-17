const genButton = document.getElementById('generateButton');
const ytPlayer = document.getElementById('videoFrame');
const videoContainer = document.getElementById('videoContainer');
const cycleButton = document.getElementById('cycleButton');

const creatorVids = [
    {name: 'Linus Tech Tips', vids:['0zbLw0X5Le4', 'g3Y0lBoOrEg','G2pQV3-JXNU', 'JxrlCBkCLWA', 'cF8lI14sS1I', 'Y3dFCWA16jY', '6wgHq9NZru0', 'PcnWneULGAQ' ]},
    {name:'RickRoll', vids:['pKskW7wJ0v0']},
    {name:'MKBHD', vids:['qF4vZxbSmjo', 'qF4vZxbSmjo', 'SUeQvl7IOV4']},
    {name:'Mrwhosetheboss', vids:['De7s-IB_DAw', 'fepKQej1DH0', 'cZypFRdPS9M']},
    ];

let currentCreatorIndex = 0;

function generateRandomVideoForCurrentCreator(){
    const currentCreator = creatorVids[currentCreatorIndex];
    const randomIndex = Math.floor(Math.random() * currentCreator.vids.length);
    const videoId = currentCreator.vids[randomIndex];
    ytPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
    videoContainer.style.display = 'block';
}

function cycleCreators() {
    currentCreatorIndex = (currentCreatorIndex + 1) % creatorVids.length;
    generateRandomVideoForCurrentCreator();
    console.log(`Current Creator: ${creatorVids[currentCreatorIndex].name}`);
}

genButton.addEventListener('click', generateRandomVideoForCurrentCreator);
cycleButton.addEventListener('click', cycleCreators);

    