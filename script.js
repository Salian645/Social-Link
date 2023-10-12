var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function SettingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // Retrieve the current theme from localStorage
    var currentTheme = localStorage.getItem("theme");

    // Toggle the theme and update localStorage
    if (currentTheme === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

// Retrieve the theme from localStorage and apply it
var currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
