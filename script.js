let quotations = [
    "When a man dwells on the pleasure of sense, the attraction for them arises in him, From attraction arises desire, the lust of possession, and this leads to passion, to anger.",
    "There is nothing lost or wasted in this life.",
    "Self-control is the Mantra of Success",
    "If you want to be Great, Think Great and Positive.",
    "Perform your obligatory duty, because action is indeed better than inaction.",
    "You are what you believe in, You become that which you believe you can become",
    "Live a well-balanced life, it will bring peace.",
    "Lust, Anger, and Greed are the three doors to hell.",
    "Love, tolerance, and selflessness should be practiced.",
    "This one’s for all those times you made an excuse for not accomplishing your goals.",
    "Detachment from material things is the way to inner peace.",
];

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let images = ["gita-1.jpg", "gita-2.jpg", "gita-3.jpg", "gita-4.jpg", "gita-5.jpg", "gita-6.jpg", "gita-7.jpg", "gita-8.jpg", "gita-9.jpg", "gita-10.jpg"];
let image = document.getElementsByTagName("img")[0];
let quote = document.getElementById("demo");
function change() {

    let rm = Math.floor(Math.random() * 10);
    image.src = images[rm];
    let b = Math.floor(Math.random() * quotations.length);
    quote.innerHTML = quotations[b];

    let x = "#";
    let y = "#";
    let z = "#";
    for (let i = 0; i < 6; i++) {
        x += hex[Math.floor(Math.random() * hex.length)];
        y += hex[Math.floor(Math.random() * hex.length)];
        z += hex[Math.floor(Math.random() * hex.length)];
    }
    let arr = [90, 270];
    let deg = arr[Math.floor(Math.random() * arr.length)];
    document.body.style.backgroundImage = `linear-gradient(${deg}deg,${x}, ${y}, ${z})`;
}
let music = document.getElementsByTagName("i")[0];
let audio = document.getElementsByTagName("audio")[0];
let audio1 = document.getElementsByTagName("audio")[1];
let music1 = document.getElementsByTagName("i")[1];
music.addEventListener("click", () => {
    if (music.classList.contains("fa-play")) {
        audio.play();
        music.classList.remove("fa-play");
        music.classList.add("fa-pause");
        music1.classList.remove("fa-pause");
        music1.classList.add("fa-play");
        audio1.pause();
    } else {
        music.classList.remove("fa-pause");
        music.classList.add("fa-play");
        audio.pause();
    }
});
music1.addEventListener("click", () => {
    if (music1.classList.contains("fa-play")) {
        audio1.play();
        music1.classList.remove("fa-play");
        music1.classList.add("fa-pause");
        music.classList.remove("fa-pause");
        music.classList.add("fa-play");
        audio.pause();
    } else {
        music1.classList.remove("fa-pause");
        music1.classList.add("fa-play");
        audio1.pause();
    }
});
