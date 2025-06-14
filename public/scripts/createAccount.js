function formatString(input) {
    return input
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

document
    .getElementById('create-account-btn')
    .addEventListener('click', async () => {
        const username = document.getElementById('create-username').value;
        const password = document.getElementById('create-password').value;
        const major = document.getElementById('major-select').value;
        let id = 0;
        let classData = [];

        try {
            const response = await fetch('/data/classes');
            let data = await response.json();

            for (let i = 0; i < data.length; i++) {
                if (data[i].degree == major) {
                    for (const year in data[i].data) {
                        for (const semester in data[i].data[year]) {
                            for (const course in data[i].data[year][semester]) {
                                let credits =
                                    data[i].data[year][semester][course];
                                if (course == credits || !credits) {
                                    continue;
                                } else {
                                    classData.push({
                                        course: course,
                                        credits: credits,
                                        year: year,
                                        semester: semester,
                                        id: id,
                                    });
                                    id += 1;
                                }
                            }
                        }
                    }
                }
            }

            await fetch('/data/createAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, major, classData }),
            });
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
