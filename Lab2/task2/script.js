document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("colorTable");
    const colorPicker = document.getElementById("colorPicker");

    for (let i = 1; i <= 6; i++) {
        const row = document.createElement("tr");
        for (let j = 1; j <= 6; j++) {
            const cell = document.createElement("td");
            const cellNumber = (i - 1) * 6 + j;
            cell.textContent = cellNumber;
            cell.className = "cell";

            cell.addEventListener("mouseover", function () {
                if (cellNumber === 5) {
                    cell.style.backgroundColor = getRandomColor();
                }
            });

            cell.addEventListener("click", function () {
                const selectedColor = colorPicker.value;
                if (cellNumber === 5) {
                    cell.style.backgroundColor = selectedColor;
                }
            });

            cell.addEventListener("dblclick", function () {
                const selectedColor = colorPicker.value;
                if (cellNumber === 5) {
                    const cells = table.querySelectorAll(".cell");
                    cells.forEach((otherCell) => {
                        if (otherCell !== cell) {
                            otherCell.style.backgroundColor = selectedColor;
                        }
                    });
                } else {
                    const selectedColor = colorPicker.value;
                    const cells = table.querySelectorAll(".cell");

                    cells.forEach((otherCell) => {
                        if (otherCell !== cell) {
                            otherCell.style.backgroundColor = selectedColor;
                        }
                    });
                }
            });

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
