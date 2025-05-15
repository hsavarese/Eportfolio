"use strict";
// TypeScript file to toggle visibility of skill sections
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle-btn");
    toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.target;
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.toggle("hidden");
            }
        });
    });
});
//# sourceMappingURL=skills.js.map