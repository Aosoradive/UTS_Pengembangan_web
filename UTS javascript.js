


document.addEventListener("DOMContentLoaded", () => {
  // === Bagian track (efek craneloop) ===
  const track = document.getElementById("craneloop");
  if (track) {
    const clone = track.cloneNode(true);
    track.append(...clone.childNodes);
  }

  window.showAlert = function() {
    alert ("Thank you for testing~☆") }

  // === Bagian Read More ===
  const buttons = document.querySelectorAll(".readmore");
  const moreTexts = document.querySelectorAll(".more");
  const dots = document.querySelectorAll(".dots");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const more = moreTexts[index];
      const dot = dots[index];

      if (more.style.display === "inline") {
        more.style.display = "none";
        dot.style.display = "inline";
        btn.textContent = "Read more";
      } else {
        more.style.display = "inline";
        dot.style.display = "none";
        btn.textContent = "Read less";
      }
    });
  });

  // === Bagian Toggle Sidebar ===
  const toggleSidebar = document.querySelector("#toggle-sidebar");
  const sidebar = document.querySelector(".sidebar");

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-open");
    });
  }
});

// === Bagian Update Time (WIB) ===
function updatetime() {
  let now = new Date();
  document.getElementById("Jakarta").innerText =
    now.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" });
}

setInterval(updatetime, 1000);
updatetime();



