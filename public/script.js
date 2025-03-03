
const pageName = location.pathname.split('/').pop() || 'index.html';

if (!pageName.match(/^[a-zA-Z0-9_.-]+$/)) {
    console.error("Invalid page name.");
} else {
    fetch(`/hits/${pageName}`)
        .then(response => response.text())
        .then(count => {
            document.getElementById('hits').innerText = `Current hits for this page: ${count}`;
        })
        .catch(err => console.error("Error fetching hit count:", err));
}
