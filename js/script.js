// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the display-student-info button
    const displayStudentInfoButton = document.getElementById('display-student-info');

    // Add event listener to the button
    displayStudentInfoButton.addEventListener('click', function() {
        // Get the student info element
        const studentInfo = document.getElementById('student-info');

        // Check if the student info element exists
        if (studentInfo) {
            // Toggle the display of the student info
            studentInfo.style.display = studentInfo.style.display === 'none' ? 'block' : 'none';
        }
    });

    // Get the element with the ID 'student-info'
    const studentInfo = document.getElementById('student-info');

    // Check if the element exists
    if (studentInfo) {
        // Set student info
        studentInfo.innerHTML = '<p id="student-id">Student ID: yourid</p><p id="student-name">Name: yourname</p>';

        // API key for OpenWeatherMap
        const apiKey = 'yourkey';

        // API URL for London weather data
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

        // Fetch weather data
        fetch(apiUrl)
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                // Create paragraph for weather info
                const weatherInfo = document.createElement('p');

                // Set weather info text
                weatherInfo.textContent = `Current temperature in London: ${data.main.temp}°C`;

                // Append weather info to document body
                document.body.appendChild(weatherInfo);
            })
            .catch(error => console.log('Error fetching data:', error)); // Log fetch error
    } else {
        console.log('Element with ID "student-info" not found.'); // Log if element not found
    }
});
