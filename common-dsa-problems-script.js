document.addEventListener("DOMContentLoaded", () => {
    initFilters();

});

function filterRows() {
    const value = document.getElementById("difficultyFilter").value;
    const headers = document.querySelectorAll(".section-header");

    headers.forEach(header => {
        let visible = false;
        let el = header.nextElementSibling;

        while (el && !el.classList.contains("section-header")) {
            if (el.classList.contains("row")) {
                const tag = el.querySelector(".tag");
                const show = value === "all" || tag.classList.contains(value);
                el.style.display = show ? "grid" : "none";
                if (show) visible = true;
            }
            el = el.nextElementSibling;
        }
        header.style.display = visible ? "block" : "none";
    });
}
