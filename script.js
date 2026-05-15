// Age Calculator
document.getElementById("btn").addEventListener("click", calculateAge);

function calculateAge() {

    let dobValue = document.getElementById("dob").value;

    if (dobValue === "") {
        document.getElementById("result").innerText = "⚠ Please select your date of birth!";
        return;
    }

    let birthDate = new Date(dobValue);
    let today = new Date();

    if (birthDate > today) {
        document.getElementById("result").innerText = "⚠ Future date not allowed!";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Next Birthday
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    let diff = nextBirthday - today;
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    let message = `🎉 Age: ${years} Years, ${months} Months, ${days} Days\n🎂 Next birthday in ${daysLeft} days`;

    if (daysLeft === 0) {
        message += "\n🎉 HAPPY BIRTHDAY! 🎉";
    }

    document.getElementById("result").innerText = message;
}

// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerText = "☀️ Light Mode";
}