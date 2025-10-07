document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMe");
  const message = document.getElementById("message");

  if (button && message) {
    button.addEventListener("click", function () {
      message.textContent = "CI/CD is working! 🎉";
      message.style.color = "#28a745";

      // Add some visual feedback
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    });
  }

  // Add version from URL parameters for demo purposes
  const urlParams = new URLSearchParams(window.location.search);
  const version = urlParams.get("version") || "1.0.0";
  const versionElement = document.getElementById("version");
  if (versionElement) {
    versionElement.textContent = version;
  }
});
