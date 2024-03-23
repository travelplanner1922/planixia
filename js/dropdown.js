document.addEventListener("DOMContentLoaded", function () {
  const profileAvatar = document.getElementById("profileAvatar");
  const profileDropdown = document.getElementById("profileDropdown");

  profileAvatar.addEventListener("mouseenter", function () {
    profileDropdown.style.display = "block";
  });

  profileAvatar.addEventListener("mouseleave", function () {
    profileDropdown.style.display = "none";
  });

  profileDropdown.addEventListener("mouseenter", function () {
    profileDropdown.style.display = "block";
  });

  profileDropdown.addEventListener("mouseleave", function () {
    profileDropdown.style.display = "none";
  });
});
