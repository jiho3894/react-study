//클릭시 색상 변경
const h1 = document.querySelector("h1")
, Clock_class = "clocker";

function clockerEvent() {
    h1.classList.toggle(Clock_class);
}

function init() {
    h1.addEventListener("click", clockerEvent);
}
init();