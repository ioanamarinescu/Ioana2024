// SUPER OBVIOUS TEST - adds a red banner at the top of every page
console.log('Custom JS loaded!');
alert('Custom JS is working! Click OK to continue.');

// Add a visible banner to the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded!');
    
    // Create a test banner
    const banner = document.createElement('div');
    banner.innerHTML = 'CUSTOM JS IS LOADED AND WORKING!';
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: blue;
        color: white;
        text-align: center;
        padding: 10px;
        z-index: 99999;
        font-size: 20px;
        font-weight: bold;
    `;
    document.body.appendChild(banner);
    
    // Remove banner after 5 seconds
    setTimeout(() => banner.remove(), 5000);
    
    // Also log to console every second
    let counter = 0;
    const interval = setInterval(() => {
        console.log('Custom JS is running! Count:', counter++);
        if (counter > 5) clearInterval(interval);
    }, 1000);
});
