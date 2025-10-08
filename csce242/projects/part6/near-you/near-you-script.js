async function loadCourtsAndGroups() {
    const courtsUrl = 'https://tylerbouldin.github.io/csce242/projects/part6/near-you/courts.json';
    const groupsUrl = 'https://tylerbouldin.github.io/csce242/projects/part6/near-you/groups.json';
    
    try {
        console.log('Loading courts and groups...');
        
        const [courtsResponse, groupsResponse] = await Promise.all([
            fetch(courtsUrl),
            fetch(groupsUrl)
        ]);
        
        if (!courtsResponse.ok || !groupsResponse.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const courts = await courtsResponse.json();
        const groups = await groupsResponse.json();
        
        console.log('Loaded courts:', courts);
        console.log('Loaded groups:', groups);
        
        displayCourts(courts);
        displayGroups(groups);
    } catch (error) {
        console.log('Error loading courts and groups:', error);
        document.getElementById('courts-container').innerHTML = '<p>Error loading court information.</p>';
        document.getElementById('groups-container').innerHTML = '<p>Error loading group information.</p>';
    }
}

function displayCourts(courts) {
    const courtsContainer = document.getElementById('courts-container');
    courtsContainer.innerHTML = '';
    
    courts.forEach(court => {
        const courtHTML = `
            <div class="court-info">
                <h4>${court.name}</h4>
                <p>${court.address}</p>
                <p>${court.hours}</p>
                <p>${court.courts}</p>
                <p>${court.amenities}</p>
            </div>
        `;
        courtsContainer.innerHTML += courtHTML;
    });
}

function displayGroups(groups) {
    const groupsContainer = document.getElementById('groups-container');
    groupsContainer.innerHTML = '';
    
    groups.forEach(group => {
        const groupHTML = `
            <li>${group.name} - ${group.location} (${group.time})</li>
        `;
        groupsContainer.innerHTML += groupHTML;
    });
}

window.onload = loadCourtsAndGroups;
