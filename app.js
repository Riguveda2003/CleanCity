let map;
let marker;

function initMap() {
    // Initialize the map centered on a sample location (San Francisco)
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    });

    // Add a click listener to place a marker on the map
    map.addListener("click", (event) => {
        placeMarker(event.latLng);
    });
}

// Function to place a marker on the map
function placeMarker(location) {
    if (marker) {
        marker.setPosition(location);
    } else {
        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }
    // Set the location value in the form
    document.getElementById("location").value = `${location.lat()}, ${location.lng()}`;
}

// Handle form submission
document.getElementById("binForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const image = document.getElementById("image").files[0];
    const comments = document.getElementById("comments").value;

    // Simulate sending data to the server (replace this with actual server request)
    console.log("Submitting report...");
    console.log("Location:", location);
    console.log("Image:", image ? image.name : "No image provided");
    console.log("Comments:", comments);

    alert("Report submitted successfully!");

    // Clear the form
    document.getElementById("binForm").reset();
    if (marker) {
        marker.setMap(null);
        marker = null;
    }
});
