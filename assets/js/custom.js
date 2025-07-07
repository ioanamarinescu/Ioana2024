console.log('Custom JS loaded!');

// Auto-click Load More button for search results
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up search auto-expand...');
    
    // Function to click Load More button
    function clickLoadMore() {
        const loadMoreBtn = document.querySelector('.pagefind-ui__button');
        if (loadMoreBtn && loadMoreBtn.textContent.includes('Load')) {
            console.log('Clicking Load More button...');
            loadMoreBtn.click();
            setTimeout(clickLoadMore, 200);
        }
    }
    
    // Watch for search results to appear
    const observer = new MutationObserver(function(mutations) {
        const hasResults = document.querySelector('.pagefind-ui__result');
        const hasButton = document.querySelector('.pagefind-ui__button');
        
        if (hasResults && hasButton) {
            console.log('Search results detected, auto-expanding...');
            clickLoadMore();
        }
    });
    
    // Start observing the entire document
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
});
