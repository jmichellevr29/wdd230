document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleView');
    const membersContainer = document.getElementById('members');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            renderMembers(data, 'grid');
        });

    toggleButton.addEventListener('click', () => {
        if (membersContainer.classList.contains('grid')) {
            fetch('data/members.json')
                .then(response => response.json())
                .then(data => {
                    renderMembers(data, 'list');
                });
        } else {
            fetch('data/members.json')
                .then(response => response.json())
                .then(data => {
                    renderMembers(data, 'grid');
                });
        }
    });

    function renderMembers(members, view) {
        membersContainer.className = view;
        membersContainer.innerHTML = '';

        members.forEach(member => {
            if (view === 'grid') {
                const memberCard = document.createElement('div');
                memberCard.className = 'member-card';
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.additional_info}</p>
                `;
                membersContainer.appendChild(memberCard);
            } else {
                const memberListItem = document.createElement('div');
                memberListItem.className = 'member-list-item';
                memberListItem.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <div>
                        <h2>${member.name}</h2>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <p>Membership Level: ${member.membership_level}</p>
                        <p>${member.additional_info}</p>
                    </div>
                `;
                membersContainer.appendChild(memberListItem);
            }
        });
    }
});
