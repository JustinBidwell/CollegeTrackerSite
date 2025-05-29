document.getElementById('sign-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username, password);
    try {
        const response = await fetch('/data/username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
        });
        const data = await response.json();
        const incorrectLoginElement =
            document.getElementById('incorrect-username');
        if (data.length > 0) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('landing-page-container').style.display =
                'block';
            incorrectLoginElement.style.display = 'none';
            console.log(data);
            let tableBody = document.getElementById('college-table');
            for (let i = 0; i < data.length; i++) {
                let semester =
                    data[i].semester.charAt(0).toUpperCase() +
                    data[i].semester.slice(1);
                let year =
                    data[i].year.charAt(0).toUpperCase() +
                    data[i].year.slice(1);
                let dropdown =
                    '<select><option>Completed</option><option>In-Progress</option><option>Scheduled</option></select>';
                tableBody.innerHTML += `<tr><th><input value="${data[i].class}"></input></th><th><input value="${data[i].credits}"></input></th><th><input value="${semester}"></input></th><th><input value="${year}"></input></th><th>${dropdown}</th></tr>`;
            }
        } else {
            incorrectLoginElement.style.display = 'block';
        }
    } catch (error) {
        console.log(error);
    }
});
