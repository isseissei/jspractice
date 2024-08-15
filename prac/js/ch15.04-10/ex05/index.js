customElements.define("inline-circle", class InlineCircle extends HTMLElement {
    connectedCallback() {
        this.style.display = "inline-block";
        this.style.borderRadius = "50%";  // 初期のボーダー色を設定
        this.style.transform = "translateY(10%)";

        if (!this.style.border) {
            this.style.border = "solid 1px black"
        }

        if (!this.style.width) {
            this.style.width = "0.8em";
            this.style.height = "0.8em";
        }
    }

    static get observedAttributes() { return ["diameter", "color", "bordercolor"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "diameter":
                this.style.width = newValue;
                this.style.height = newValue;
                break;
            case "color":
                this.style.backgroundColor = newValue;
                break;
            case "bordercolor":
                this.style.border = "solid 1px " + newValue;
                break;
        }
    }

    get diameter() { return this.getAttribute("diameter"); }
    set diameter(diameter) { this.setAttribute("diameter", diameter); }
    get color() { return this.getAttribute("color"); }
    set color(color) { this.setAttribute("color", color); }

    get bordercolor() { return this.getAttribute("bordercolor"); }
    set bordercolor(bordercolor) { this.setAttribute("bordercolor", bordercolor); }
});
