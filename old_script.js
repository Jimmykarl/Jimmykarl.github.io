document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("abstract-toggle");
    const abstractText = document.getElementById("abstract-text");
    const arrow = toggleButton.querySelector(".arrow");

    toggleButton.addEventListener("click", function() {
        if (abstractText.style.display === "none" || abstractText.style.display === "") {
            abstractText.style.display = "block";
            arrow.style.transform = "rotate(90deg)";
        } else {
            abstractText.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    });
});
