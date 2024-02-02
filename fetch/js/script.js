let todo = fetch('https://docs.noroff.dev/jokes')
    .then(httpResponse => {
        // Check if the request was successful (status code 200-299)
        if (!httpResponse.ok) {
            throw new Error(`HTTP error! Status: ${httpResponse.status}`);  // , when you see :: if (!httpResponse.ok), it means "if the response is not okay"
        }
        // Parse the response body as JSON
        return httpResponse.json();
    })
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });


// Yes, your code looks correct! It follows the typical structure for using the fetch API to make a request, handle the response, and process the JSON data.
//
//     Just a quick recap of what your code does:
//
//     The fetch function is used to make a request to 'https://...'.
//     The first .then block checks if the HTTP response indicates success (status code 200-299). If not, it throws an error.
//     If the request is successful, the second .then block parses the response body as JSON using httpResponse.json().
//     The final .then block logs the parsed JSON data to the console.
//     The .catch block handles any errors that might occur during the fetch or processing.
//     Your use of arrow functions and the overall structure of the code align with best practices for working with Promises
//     and the fetch API in JavaScript. Great job!