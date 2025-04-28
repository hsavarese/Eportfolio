document.addEventListener("DOMContentLoaded", function () {
    var toggles = document.querySelectorAll(".toggle-btn");
    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetId = btn.dataset.target;
        var target = document.getElementById(targetId);
        if (target) {
          target.classList.toggle("hidden");
        }
      });
    });
  });
  