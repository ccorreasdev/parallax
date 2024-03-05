const title = document.querySelector(".home__title");
const cloud_lonely = document.querySelector(".cloud_lonely")
const clouds_bg = document.querySelector(".clouds_bg")

document.addEventListener("scroll", (e) => {
    let value = window.scrollY
    console.log(value)

    if (value < 240) {
        clouds_bg.style.marginBottom = value * 1 + "px";
    }

    title.style.marginTop = value * 1.5 + "px";
    cloud_lonely.style.marginLeft = value * 4 + "px";


})