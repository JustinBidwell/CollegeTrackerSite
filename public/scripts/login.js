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
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});
