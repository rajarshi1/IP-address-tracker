// document.getElementById('trackBtn').addEventListener('click', function() {
//     var ip = document.getElementById('ipInput').value;
//     if (ip) {
//         fetch(`https://ipinfo.io/${ip}/json`) // Replace with your chosen API
//             .then(response => {
//                 if (response.ok) return response.json();
//                 throw new Error('Network response was not ok.');
//             })
//             .then(data => {
//                 displayResults(data);
//             })
//             .catch(error => {
//                 console.error('There has been a problem with your fetch operation:', error);
//             });
//     } else {
//         alert('Please enter an IP address or domain.');
//     }
// });

// function displayResults(data) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p><strong>IP:</strong> ${data.ip}</p>
//         <p><strong>Hostname:</strong> ${data.hostname}</p>
//         <p><strong>City:</strong> ${data.city}</p>
//         <p><strong>Region:</strong> ${data.region}</p>
//         <p><strong>Country:</strong> ${data.country}</p>
//         <p><strong>ISP:</strong> ${data.org}</p>
//     `;
// }

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
    fetch(`https://ipinfo.io/${ip}?token=51396e2c4d2f00`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            displayResults(data);
            // addToHistory(ip);
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
        <p><strong>ISP:</>
        `;
}
