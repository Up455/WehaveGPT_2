const images = [
    { src: "images/art1.jpg", title: "I've been to the desert", description: "Acrylic on hand stretched canvas 120x150cm.", group: ["images/art1.jpg", "images/art1.3.jpg", "images/art1.4.jpg", "images/art1.2.jpg"] },
    { src: "images/art2.jpg", title: "Horse/A-cross", description: "Acrylic on hand stretched canvas 120x150cm(ish)", group: ["images/art2.1.jpg", "images/art2.2.jpg", "images/art2.5.jpg"] },
    { src: "images/art3.jpg", title: "Listen to the wind / scream", description: "Acrylic on hand stretched canvas 120x150cm(ish)", group: ["images/art3.jpg", "images/art3.1.jpg", "images/art3.2.jpg"] },
{ src: "images/art4.jpg", title: "Peace", description: "Acrylic on canvas 120 something, can't remember", group: ["images/art4.jpg", "images/art4.1.jpg", "images/art4.2.jpg"] },
{ src: "images/art5.jpg", title: "we_have_heaven", description: "Pen/paint on large Chartwell graph paper.", group: ["images/art5.jpg", "images/art5.1.jpg", "images/art5.2.jpg" ] },
{ src: "images/art6.jpg", title: "Feeling blue", description: "Acrylic on canvas 120 something, can't remember.", group: ["images/art6.jpg", "images/art6.1.jpg", "images/art6.2.jpg"] },
{ src: "images/art7.jpg", title: "In your head, what's in your head?", description: "Acrylic on canvas 120 something, can't remember.", group: ["images/art7.jpg", "images/art7.1.jpg", "images/art7.2.jpg", "images/art7.3.jpg", "images/art7.2.jpg"] },
{ src: "images/art8.jpg", title: "Roots,", description: "Acrylic on hand stretched canvas 120x150cm(ish)", group: ["images/art8.jpg", "images/art8.2.jpg"] },
{ src: "images/art9.jpg", title: "Passing days", description: "Pen/marker/biro on large A3(ish)paper.", group: ["images/art9.jpg", "images/art9.1.jpg", "images/art9.2.jpg", "images/art9.3.jpg"] },
{ src: "images/art10.jpg", title: "Fishbowl life", description: "Pen/paint on large Chartwell graph paper.", group: ["images/art10.jpg"] },
{ src: "images/art11.jpg", title: "Keep the aspidistras flying'", description: "Acrylic on canvas 120x150cm(ish)", group: ["images/art11.jpg", "images/art11.1.jpg", "images/art11.2.jpg"] },
{ src: "images/art12.jpg", title: "PassingDaisies", description: "en/marker/biro on large A3(ish)paper.", group: ["images/art12.jpg"] },
{ src: "images/art13.jpg", title: "Palm", description: "Pen/marker/biro on large A3(ish)paper.", group: ["images/art13.jpg"] },
{ src: "images/art14.jpg", title: "we-own-ya!", description: "Pen/marker/biro on large A3(ish)paper.", group: ["images/art14.jpg", "images/art14.1.jpg", "images/art14.2.jpg", "images/art14.3.jpg" ] },
{ src: "images/art15.jpg", title: "Lounging", description: "Acrylic on canvas 120x150cm(ish)", group: ["images/art15.jpg", "images/art15.1.jpg", "images/art15.2.jpg"] },
{ src: "images/art16.jpg", title: "RenaissanceNow!", description: "Paint/Posca on A3 Card.", group: ["images/art16.jpg", "images/art16.1.jpg", "images/art16.2.jpg"] },
{ src: "images/art17.1.jpg", title: "Chemtravails", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art17.1.jpg", "images/art17.2.jpg", "images/art17.jpg"] },
{ src: "images/art18.jpg", title: "but, but, but", description: "Acrylic on canvas 120x150cm(ish).", group: ["images/art18.jpg", "images/art18.1.jpg"] },
{ src: "images/art19.jpg", title: "Sky*Not*Happy(SERIES)", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art19.jpg", "images/art19.1.jpg", "images/art19.2.jpg"] },
{ src: "images/art20.jpg", title: "Burial in space", description: "Paint, on IKEA blind....", group: ["images/art20.1.jpg", "images/art20.2.jpg", "images/art20.3.jpg"] },
{ src: "images/art21.jpg", title: "ALanguagelandscape", description: "*", group: ["images/art21.jpg", "images/art21.1.jpg"] },
{ src: "images/art22.jpg", title: "Astroid_1(SERIES)", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art22.jpg",
 "images/art22.1.jpg", "images/art22.3.jpg", "images/art22.4.jpg", "images/art22.4.jpg"] },
{ src: "images/art23.jpg", title: "sprits&sprites,everythingsalright", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art23.jpg"] },
{ src: "images/art24.jpg", title: "Ah a breakthrough", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art24.jpg"] },
{ src: "images/art25.jpg", title: "fields-at-flight", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art25.jpg"] },
{ src: "images/art26.jpg", title: "something dances", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art26.jpg"] },
{ src: "images/art27.jpg", title: "the world's above us", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art27.jpg", "images/art27.1.jpg"] },
{ src: "images/art29.jpg", title: "PEAK", description: "Pen/paint/spraypaint on paper.", group: ["images/art29.jpg"] },
{ src: "images/art30.jpg", title: "rise", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art30.jpg"] },
{ src: "images/art31.jpg", title: "YES!", description: "Pen/Marker/highlighter on paper.", group: ["images/art31.jpg", "images/art31.2.jpg"] },
{ src: "images/art32.jpg", title: "sticks", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art32.jpg", "images/art32.1.jpg"] },
{ src: "images/art33.jpg", title: "here's to returning.", description: "Pen/marker on A4 paper.", group: ["images/art33.jpg", "images/art33.1.jpg"] },
{ src: "images/art34.jpg", title: "splits", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art34.jpg"] },
{ src: "images/art35.jpg", title: "no return", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art35.jpg"] },
{ src: "images/art37.jpg", title: "AdventureTimes", description: "Pen/paint/spraypaint on A4 paper.", group: ["images/art37.jpg"] },

];

let currentGroup = [];
let currentIndex = 0;

function showCarouselImage(index) {
    document.getElementById("lightbox-img").src = currentGroup[index];
    document.getElementById("lightbox-text").innerText = images.find(img => img.group.includes(currentGroup[index])).description;
}

function openImage(src, description) {
    const imgObj = images.find(img => img.src === src);
    if (imgObj && imgObj.group) {
        currentGroup = imgObj.group;
        currentIndex = 0;
        showCarouselImage(currentIndex);
        document.getElementById("lightbox").style.display = "flex";
    }
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

function prevImage() {
    if (currentGroup.length > 1) {
        currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
        showCarouselImage(currentIndex);
    }
}

function nextImage() {
    if (currentGroup.length > 1) {
        currentIndex = (currentIndex + 1) % currentGroup.length;
        showCarouselImage(currentIndex);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    if (!gallery) return;

    images.forEach(image => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        div.setAttribute("onclick", `openImage('${image.src}', '${image.description.replace(/'/g, "\\'")}')`);
        div.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="image-title">${image.title}</div>
        `;
        gallery.appendChild(div);
    });

    const lightbox = document.getElementById("lightbox");
    const prev = document.createElement("button");
    const next = document.createElement("button");

    prev.innerText = "<";
    next.innerText = ">";
    prev.style.position = next.style.position = "absolute";
    prev.style.left = "20px";
    next.style.right = "20px";
    prev.style.top = next.style.top = "50%";
    prev.style.transform = next.style.transform = "translateY(-50%)";
    prev.style.background = next.style.background = "rgba(0,0,0,0.5)";
    prev.style.color = next.style.color = "white";
    prev.style.border = next.style.border = "none";
    prev.style.fontSize = next.style.fontSize = "30px";
    prev.style.padding = next.style.padding = "10px";
    prev.style.cursor = next.style.cursor = "pointer";

    prev.addEventListener("click", (e) => {
        e.stopPropagation();
        prevImage();
    });
    next.addEventListener("click", (e) => {
        e.stopPropagation();
        nextImage();
    });

    lightbox.appendChild(prev);
    lightbox.appendChild(next);
});
