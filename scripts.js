// scripts.js

// Function to initialize the Google Map
function initMap() {
    var location = { lat: -34.397, lng: 150.644 };
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Show success message
    alert('Thank you, ' + name + '! Your message has been successfully submitted.');

    // Optionally, you could clear the form fields
    document.querySelector('form').reset();
}

// Attach the handleSubmit function to the form's submit event
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});

