document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (button.classList.contains("clear")) {
                // Reset tampilan
                display.value = "";
            } else if (button.classList.contains("operator") && value === "=") {
                // Kalkulasi hasil
                try {
                    display.value = eval(display.value.replace(/x/g, "*"));
                } catch {
                    display.value = "Error";
                }
            } else if (button.classList.contains("operator") && value !== "=") {
                // Tambahkan operator ke tampilan
                display.value += value === "x" ? "*" : value;
            } else {
                // Tambahkan nilai tombol ke tampilan
                display.value += value;
            }
        });
    });
});
