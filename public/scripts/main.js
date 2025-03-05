document.getElementById('btn-2').addEventListener('click', async () => {
    const response = await fetch('/data/classes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let tableContainer = document.getElementById('tbody');
    const data = await response.json();

    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td><input type='text' value='${data[i].class}'></td> <td><input type='text' value='${data[i].semester}'></td> <td><input type='text' value='${data[i].credits}'></td>`;
        tableContainer.append(tableRow);
    }
});

document.getElementById('btn').addEventListener('click', async () => {
    try {
        const response = await fetch('/data/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: 'hey@mail.com', password: '101010' }),
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting your data.');
    }
});
