// Search overlay fix
console.log('Custom JS loaded!');

// Wait for everything to load
window.addEventListener('load', function() {
  console.log('Window loaded, applying search fix...');
  
  // Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    /* Force search to cover everything */
    #search:not(.hidden) {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      background: white !important;
      z-index: 999999 !important;
      overflow-y: auto !important;
    }
    
    .dark #search:not(.hidden) {
      background: #151f28 !important;
    }
    
    /* Hide body overflow when searching */
    html:has(#search:not(.hidden)) {
      overflow: hidden !important;
    }
    
    body:has(#search:not(.hidden)) {
      overflow: hidden !important;
      position: fixed !important;
    }
  `;
  document.head.appendChild(style);
  
  // Force fix when search opens
  const searchToggle = document.getElementById('search_toggle');
  if (searchToggle) {
    searchToggle.addEventListener('click', function() {
      setTimeout(function() {
        const search = document.getElementById('search');
        if (search && !search.classList.contains('hidden')) {
          search.style.position = 'fixed';
          search.style.top = '0';
          search.style.left = '0';
          search.style.width = '100%';
          search.style.height = '100%';
          search.style.background = 'white';
          search.style.zIndex = '999999';
          search.style.overflowY = 'auto';
          document.body.style.overflow = 'hidden';
        }
      }, 100);
    });
  }
});
