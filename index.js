const crowdData = {
    "1": { "url": "images/1.jpg", "caption": "One man finding peace in solitude." },
    "50": { "url": "images/50.jpg", "caption": "50 people will fill up a room pretty quick." },
    "100": { "url": "images/100.jpg", "caption": "Speaking in front of this many people is a challenge to prepare for." },
    "150": { "url": "images/150.jpg", "caption": "The average podcast has 150 listeners. This is what that many people look like." },
    "250": { "url": "images/250.jpg", "caption": "An audience this size will fill up a small church or a lecture hall." },
    "500": { "url": "images/500.jpg", "caption": "An audience this size will need a theater to fit them all in." },
    "1000": { "url": "images/1_000.jpg", "caption": "A little over 1,000 people attended the first DrupalCon in India." },
    "3000": {
        "url": "images/3_000.jpg",
        "caption": "At this point theaters are barely holding this many people. Going to have to take this outside soon. Don't forget to count people on upper balconies."
    },
    "10000": {
        "url": "images/10_000.jpg",
        "caption": "Ok we now need a stadium to hold an audience this big."
    },
    "20000": {
        "url": "images/20_000.jpg",
        "caption": "The O2 Arena in London can hold 20,000 people."
    },
    "30000": {
        "url": "images/30_000.jpg",
        "caption": "Waldo Stadium holds 30,000."
    },
    "50000": {
        "url": "images/50_000.jpg",
        "caption": "Aloha stadium holds 50,000 people."
    },
    "75000": {
        "url": "images/75_000.jpg",
        "caption": "Notre Dame stadium holds 75,000 people."
    },
    "100000": {
        "url": "images/100_000.jpg",
        "caption": "Michigan stadium holds 100,000 people."
    },
    "180000": {
        "url": "images/180_000.jpg",
        "caption": "Texas Motor Speedway claims to be able to hold 180,000 people, but that includes the skybox seats high above too."
    },
    "1500000": { "url": "images/1_500_000.jpg", "caption": "President Donald Trump's 2016 inauguration resulted in a turnout of roughly 1.5 million people." },
    "11200000": { "url": "images/11_200_000.jpg", "caption": "The city of Bangkok, Thailand has a population of roughly 11.2 million people." },
    "8200000000": { "url": "images/8_200_000_000.jpg", "caption": "Earth has roughly 8.2 billion people and holds *almost* all of humanity!" }
};

const sortedKeys = Object.keys(crowdData).map(Number).sort((a, b) => a - b);

document.getElementById('crowdNumber').addEventListener('input', (event) => {
    const inputValue = Number(event.target.value);
    const closestKey = sortedKeys.reduce((prev, curr) => {
        return Math.abs(curr - inputValue) < Math.abs(prev - inputValue) ? curr : prev;
    });

    const resultDiv = document.getElementById('result');
    const crowdImage = document.getElementById('crowdImage');
    const caption = document.getElementById('caption');

    if (inputValue > 0) {
        crowdImage.src = crowdData[closestKey].url;
        crowdImage.alt = `${closestKey} People`;
        crowdImage.style.display = "block";

        caption.textContent = crowdData[closestKey].caption;
        caption.style.display = "block";
    } else {
        crowdImage.style.display = "none";
        caption.style.display = "none";
    }
});
