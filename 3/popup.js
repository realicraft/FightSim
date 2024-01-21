class Popup {
    constructor(name, width, height, title, content) {
        // setup
        this.name = name;
        this.w = width;
        this.h = height;
        this.title = title;
        this.cont = content;
        this.open = false;

        // make popup
        this.element = document.createElement("div");
        this.element.className = "popup";
        this.element.id = "popup_" + this.name;
        this.element.style.width = this.w + "px";
        this.element.style.height = this.h + "px";
        this.element.style.left = "calc(50% - " + Math.floor(this.w/2) + "px)";
        this.element.style.top = "calc(50% - " + Math.floor(this.h/2) + "px)";
        this.element.innerHTML = "<h3 class=\"popup_title\">" + this.title + "</h3><div class=\"popup_content\">" + this.cont + "</div>";

        // close button
        var button = document.createElement("span");
        button.className = "popup_close";
        button.addEventListener('click', () => {
            this.despawn();
        });
        button.innerHTML = "X";
        this.element.prepend(button);
    }

    spawn() {
        if (!this.open) {
            this.open = true;
            document.body.append(this.element);
        }
    }

    despawn() {
        if (this.open) {
            document.getElementById("popup_" + this.name).remove();
            this.open = false;
        }
    }
}