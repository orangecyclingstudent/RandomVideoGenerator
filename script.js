const genButton = document.getElementById('generateButton');
const ytPlayer = document.getElementById('videoFrame');
const videoContainer = document.getElementById('videoContainer');
const creatorInput = document.getElementById('creatorInput');
const moodSelect = document.getElementById('mood');

let currentCreatorIndex = 0;

async function generateRandomVideoForCurrentCreator(){
    const creator = creatorInput.value.trim();
    const mood = moodSelect.value;

    if (!creator) {
        alert('Please enter a creator name.');
        return;
    }

    const reqData = {
        creator: creator,
        mood: mood
    }

    try{
        console.log(JSON.stringify(reqData));
        const response = await fetch('https://randvid-backend.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqData)
        })

        if (!response.ok) {
            throw new Error('Backend response was not ok');
        }
        const data = await response.json();
        ytPlayer.src = data.videoUrl;
        console.log('Video URL:', data.videoUrl);
        videoContainer.style.display = 'block';
    }
    catch (error) {
        console.error('Error:', error);
        alert('Failed to generate video. Please try again later.');
        return;
    }

}


genButton.addEventListener('click', generateRandomVideoForCurrentCreator);

    