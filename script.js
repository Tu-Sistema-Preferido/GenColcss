document.getElementById('generateColorBtn').addEventListener('click', generateRandomColor);
document.getElementById('colorPicker').addEventListener('input', selectColor);

function generateRandomColor() {
    const color = getRandomColor();
    updateColor(color);
}

function selectColor(event) {
    const color = event.target.value;
    updateColor(color);
}

function updateColor(color) {
    document.getElementById('colorBox').style.backgroundColor = color;
    document.getElementById('colorCode').textContent = color;
    document.getElementById('colorPicker').value = color;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
