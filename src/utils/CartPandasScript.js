! function(t) {
    new class {
        constructor() {
            let t = document.getElementsByClassName("cartx-buy-button");
            this.elements = [], Array.prototype.forEach.call(t, ((t, e) => {
                let o = t.dataset.buyButton,
                    n = JSON.stringify(this.setOptions(t.dataset));
                this.createIframe(t, e);
                let s = new XMLHttpRequest;
                s.onreadystatechange = () => {
                    if (4 === s.readyState) {
                        var t = JSON.parse(s.responseText);
                        t.active && this.loadContent(JSON.parse(t.html), t.index)
                    }
                }, s.open("GET", t.dataset.shopUrl + "buy-button/" + o + "?index=" + e + "&options=" + n), s.send()
            }))
        }
        createIframe(t, e) {
            let o = document.createElement("iframe");
            o.style.width = "100%", o.style.height = "100%", o.style.display = "none", o.style.overflowY = "hidden", o.className = "cartx-buy-button-frame_" + e, o.className += " buy-button-frame", o.setAttribute("frameBorder", "0"), o.setAttribute("scrolling", "no"), t.appendChild(o)
        }
        loadContent(t, e) {
            let o = document.querySelector("iframe.cartx-buy-button-frame_" + e);
            o.style.display = "block", o.contentDocument.write(t), o.contentDocument.close(), o.onload = () => {
                setTimeout((function() {
                    o.style.height = 0, 
                    o.style.height = o.contentDocument.body.scrollHeight + 20 + "px"                    
                }), 500)
            }
        }
        setOptions(t) {
            let e = {};
            return t.showImage && (e.showImage = t.showImage), t.showTitle && (e.showTitle = t.showTitle), t.showPrice && (e.showPrice = t.showPrice), t.showDescription && (e.showDescription = t.showDescription), t.descriptionLength && (e.descriptionLength = t.descriptionLength), e
        }
    };
    let e = document.getElementsByClassName("cartx-buy-button");
    Array.prototype.forEach.call(e, ((t, e) => {
        let o = document.querySelector("iframe.cartx-buy-button-frame_" + e);
        o.onload = () => {
            setTimeout((function() {
                o.style.height = o.contentDocument.body.scrollHeight + 20 + "px"
            }), 500)
        }
    }))


}(window);