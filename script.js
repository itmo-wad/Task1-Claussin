(() => {
    let gallery = document.querySelector(".content")
    for (i = 1; i < 34; i++) {

        let container = document.createElement("div")
        container.classList.add("container")

        let title = document.createElement("div")
        title.classList.add("caption")
        title.innerHTML = "photo number: " + i

        let images = document.createElement("img")
        images.src = "https://raw.githubusercontent.com/itmo-wad/Task-1-Mulin-Pavel/master/images/dog_" + i + ".jpg"

        container.appendChild(images)
        container.appendChild(title)
        gallery.appendChild(container)
    }
})();
