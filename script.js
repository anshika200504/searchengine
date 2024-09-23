// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('searchInput');
//     const searchButton = document.getElementById('searchButton');
//     const historyList = document.getElementById('historyList');
//     const clearHistoryButton = document.getElementById('clearHistoryButton');
    
//     // Fetch search history from local storage (or search_history.json if needed)
//     const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
//     // Function to display search history
//     function displayHistory() {
//         historyList.innerHTML = '';
//         searchHistory.forEach((term) => {
//             const li = document.createElement('li');
//             li.textContent = term;
//             historyList.appendChild(li);
//         });
//     }

//     // Load the history on page load
//     displayHistory();

//     // Add search term to history and localStorage
//     searchButton.addEventListener('click', () => {
//         const searchTerm = searchInput.value.trim();
//         if (searchTerm) {
//             searchHistory.push(searchTerm);
//             localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
//             displayHistory();
//             searchInput.value = ''; // Clear input field after search
//         }
//     });

//     // Clear history
//     clearHistoryButton.addEventListener('click', () => {
//         localStorage.removeItem('searchHistory');
//         searchHistory.length = 0; // Clear the array
//         displayHistory(); // Update the UI
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const searchHistoryList = document.getElementById('searchHistory');

    // Load search history from local storage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Function to update the search history display
    const updateSearchHistoryDisplay = () => {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            searchHistoryList.appendChild(li);
        });
    };

    // Update display on page load
    updateSearchHistoryDisplay();

    // Add search term to history
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            updateSearchHistoryDisplay();
            searchInput.value = '';
        }
    });

    // Clear search history
    clearHistoryButton.addEventListener('click', () => {
        searchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        updateSearchHistoryDisplay();
    });
});
