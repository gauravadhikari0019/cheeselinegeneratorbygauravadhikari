const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Are you a time traveler? Because I see you in my future.",
    "Are you a loan from a bank? Because you have my interest!",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a parking ticket? Because you've got FINE written all over you.",
    "Do you believe in love at first sight, or should I walk by again?"
];

document.getElementById('generate-button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    const randomLine = pickupLines[randomIndex];
    document.getElementById('pickup-line').innerText = randomLine;
});
