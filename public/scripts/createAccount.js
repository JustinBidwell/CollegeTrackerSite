function formatString(input) {
    return input
        .replace(/-/g, ' ') // Replace all '#' with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

document
    .getElementById('create-account-btn')
    .addEventListener('click', async () => {
        try {
            const response = await fetch('/data/classes');
            let data = await response.json();

            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
        } catch (error) {
            console.log(error);
        }
    });

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/data/classes');
        let data = await response.json();
        const majorSelect = document.getElementById('major-select');

        for (let i = 0; i < data.length; i++) {
            let major = formatString(data[i].degree);
            const majorOption = document.createElement('option');
            majorOption.value = data[i].degree;
            majorOption.textContent = major;
            majorSelect.appendChild(majorOption);
        }
    } catch (error) {
        console.log(error);
    }
});
