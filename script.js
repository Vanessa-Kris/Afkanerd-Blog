const searchInput = document.getElementById("searchInput");

// store name elements in array-like object
const titlesFromDOM = document.getElementsByClassName("title");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();
    
    for (const titleElement of titlesFromDOM) {
        // store name text and convert to lowercase
        let title = titleElement.textContent.toLowerCase();
        
        // compare current name to search input
        if (title.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "block";
        } else {
            // no match, don't display name
            titleElement.style.display = "none";
        }
    }
});