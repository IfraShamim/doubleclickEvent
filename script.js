const image = document.getElementById("container");
const heartIcon = document.querySelector("#container .heart");
image.addEventListener("dblclick", (event) => {
    heartIcon.classList.add("active");
    setTimeout(() => {
        heartIcon.classList.remove("active");
    }, 1000);
});
