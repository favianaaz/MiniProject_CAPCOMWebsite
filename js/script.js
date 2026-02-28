// Dynamic Greeting
document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcomeText");
    if (welcomeText) {
        welcomeText.textContent = "Hi, Welcome to CAPCOM Website";
    }
});

// Form Validation and Display Result
const form = document.getElementById("messageForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById("messageText").value.trim();

if (!gender) {
    alert("Please select your gender!");
    return;
}
        
if (name === "" || dob === "" || message === "") {
    alert("All fields must be filled!");
    return;
}

        document.getElementById("resultName").textContent = name;
        document.getElementById("resultDob").textContent = dob;
        document.getElementById("resultGender").textContent = gender.value;
        document.getElementById("resultMessage").textContent = message;
        document.getElementById("currentTime").textContent = new Date().toString();

        form.reset();
    });
}