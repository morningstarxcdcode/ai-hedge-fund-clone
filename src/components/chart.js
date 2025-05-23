import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart').getContext('2d');
let myChart;

function createChart(data) {
    const labels = data.data.map(item => item.date);
    const values = data.data.map(item => item.value);

    if (myChart) {
        myChart.destroy(); // Destroy existing chart instance
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        });
}

export { createChart };
