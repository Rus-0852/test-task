(() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        !(function (e) {
            let t = new Image();
            (t.onload = t.onerror = function () {
                !(function (e) {
                    let t = !0 === e ? "webp" : "no-webp";
                    document.documentElement.classList.add(t);
                })(2 == t.height);
            }),
                (t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(),
            (function () {
                const e = document.querySelector("body"),
                    t = document.querySelectorAll("[data-modal]"),
                    o = document.querySelectorAll(".header-modal__close"),
                    c = document.querySelectorAll(".modal");
                function n(t) {
                    t.querySelector(".modal__content"), t.classList.remove("active"), e.classList.remove("no-scroll");
                }
                t.forEach((t) => {
                    t.addEventListener("click", (t) => {
                        let o = t.currentTarget.getAttribute("data-modal"),
                            c = document.getElementById(o);
                        c.querySelector(".modal__wrapper").addEventListener("click", (e) => {
                            e.stopPropagation();
                        }),
                            c.classList.add("active"),
                            e.classList.add("no-scroll");
                    });
                }),
                    e.addEventListener("keydown", (e) => {
                        if ("Escape" !== e.key) return;
                        let t = document.querySelector(".modal.active");
                        t && n(t);
                    }),
                    o.forEach((e) => {
                        e.addEventListener("click", (e) => {
                            n(e.currentTarget.closest(".modal"));
                        });
                    }),
                    c.forEach((e) => {
                        e.addEventListener("click", (e) => {
                            n(e.currentTarget);
                        });
                    });
            })();
    });
})();
