// Search overlay fix for Hugo Blox Builder
console.log('Hugo Blox custom JS loaded!');

// Apply fix after page loads
document.addEventListener('DOMContentLoaded', function() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    /* Search overlay fix */
    #search:not(.hidden) {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background-color: white !important;
      z-index: 999999 !important;
      overflow-y: auto !important;
    }
    
    .dark #search:not(.hidden) {
      background-color: #151f28 !important;
    }
    
    /* Prevent body scroll when search is open */
    body:has(#search:not(.hidden)) {
      overflow: hidden !important;
      position: fixed !important;
      width: 100% !important;
    }
    
    /* Ensure search container has solid background */
    .pagefind-ui {
      background-color: inherit !important;
    }
    
    #search .pagefind-ui__drawer {
      background-color: white !important;
      min-height: 100vh !important;
    }
    
    .dark #search .pagefind-ui__drawer {
      background-color: #151f28 !important;
    }
  `;
  document.head.appendChild(style);
  
  console.log('Search overlay fix applied!');
});
