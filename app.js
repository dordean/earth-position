<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Phone Number to Location</title>
</head>
<body>
  <h1>Phone Number to Location</h1>
  <label for="phoneNumber">Enter your phone number:</label>
  <input type="text" id="phoneNumber">
  <button onclick="getLocation()">Get Location</button>
  <p id="locationResult"></p>

  <script>
    async function getLocation() {
      const phoneNumber = document.getElementById('phoneNumber').value;

      // Replace 'YOUR_GOOGLE_API_KEY' with your actual Google Geocoding API key
      const apiKey = 'YOUR_GOOGLE_API_KEY';
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${phoneNumber}&key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          document.getElementById('locationResult').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
        } else {
          document.getElementById('locationResult').innerText = 'Location not found.';
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  </script>
</body>
</html>
