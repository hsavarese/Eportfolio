document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle-btn");
    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetId = btn.dataset.target;
        const target = document.getElementById(targetId);
        if (target) {
          target.classList.toggle("hidden");
        }
      });
    });
  });
  