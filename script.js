const trackBtn = document.getElementById('trackBtn');
const ipInput = document.getElementById('ipInput');
const resultsDiv = document.getElementById('results');
const historyList = document.getElementById('historyList');
let history = [];

trackBtn.addEventListener('click', function() {
    const ip = ipInput.value.trim();
    if (ip) {
        trackIP(ip);
    } else {
        alert('Please enter an IP address or domain.');
    }
});

function trackIP(ip) {
    // Replace with your chosen API URL
    console.log(ip)
    fetch(`https://ipinfo.io/${ip}?token=51396e2c4d2f00`)
        .then(response => {
            if (response.ok) return response.json();
            addToHistory(ip);
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            displayResults(data);
            addToHistory(ip);
        })
        .catch(error => {
            resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

function displayResults(data) {
    resultsDiv.innerHTML = `
        <p><strong>IP:</strong> ${data.ip || 'N/A'}</p>
        <p><strong>Hostname:</strong> ${data.hostname || 'N/A'}</p>
        <p><strong>City:</strong> ${data.city || 'N/A'}</p>
        <p><strong>Region:</strong> ${data.region || 'N/A'}</p>
        <p><strong>Country:</strong> ${data.country || 'N/A'}</p>
        <p><strong>ISP:</p>
        `;
}

function addToHistory(ip) {
    const historyList = document.getElementById('historyList');
    const newEntry = document.createElement('li');
    newEntry.textContent = ip;
    historyList.appendChild(newEntry);

    // Check if the history list is not empty, then show the history container
    const historyContainer = document.getElementById('history');
    console.log(historyList.childElementCount);
    if (historyList.childElementCount > 0) {
        historyContainer.style.display = 'block';
    } else {
        historyContainer.style.display = 'none';
    }
}


document.getElementById('darkModeToggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
