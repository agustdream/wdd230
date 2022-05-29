// banner

let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
  banner.style.display = "block";
}
else {
    banner.style.display = "none";
}

const closeBtn = document.getElementById("close");

closeBtn.addEventListener ("click", () => {
  banner.style.display = "none";
});