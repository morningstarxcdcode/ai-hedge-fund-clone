document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputData = document.getElementById('data-input').value;
    console.log('User input data:', inputData);
    // Logic to process and visualize the input data
});
