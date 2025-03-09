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
        const element = document.getElementById('incorrect-username');
        if (data.length > 0) {
            element.style.display = 'none';
            window.location.href = '/';
        } else {
            element.style.display = 'block';
        }
    } catch (error) {
        console.log(error);
    }
});
