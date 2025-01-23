

// Handle search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase(); // Trim and convert to lowercase
  
    // Redirect based on search term
    if (searchTerm === 'ba') {
      window.location.href = 'ba/ba.html'; // Redirect to BA page
    } else if (searchTerm === 'bca') {
      window.location.href = 'bca/bca.html'; // Redirect to BCA page
    } else if (searchTerm === 'bsc') {
      window.location.href = 'bsc/bsc.html'; // Redirect to BSC page
    } else if (searchTerm === 'mca') {
      window.location.href = 'mca/mca.html'; // Redirect to BCA page
    } else if (searchTerm === 'llb') {
      window.location.href = 'llb/llb.html'; // Redirect to BSC page
    } else if (searchTerm === 'lla') {
      window.location.href = 'lla/lla.html'; // Redirect to BCA page
    } else if (searchTerm === 'ma') {
      window.location.href = 'ma/ma.html'; // Redirect to BSC page
    } else if (searchTerm === 'mcom') {
      window.location.href = 'mcom/mcom.html'; // Redirect to BCA page
    } else if (searchTerm === 'msc') {
      window.location.href = 'msc/msc.html'; // Redirect to BSC page
    } else if (searchTerm === 'phd') {
      window.location.href = 'phd/phd.html'; // Redirect to BCA page
    } else if (searchTerm === 'bba') {
      window.location.href = 'bba/bba.html'; // Redirect to BSC page
    } else {
      alert('No results found for: ' + searchInput.value); // Show alert if no match
    }
  }
  
 // Ensure DOM is loaded before attaching the event listeners
document.addEventListener('DOMContentLoaded', function () {
  
    // Search button click event
    document.getElementById('searchButton').addEventListener('click', handleSearch);
  
    // Add enter key support for search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  });
// Handle paper downloads
function downloadPaper(paperId) {
    // This is a placeholder function
    // In a real implementation, this would handle actual file downloads
    alert('Downloading ' + paperId + '...');
}

window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};