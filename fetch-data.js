async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }

        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create and populate list
        const userList = document.createElement('ul');

        if (!Array.isArray(users) || users.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No users found.';
            userList.appendChild(li);
        } else {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });
        }

        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear and show friendly error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
