document.getElementById('loadData').addEventListener('click', function() {
    // Fetch data and render chart
    fetch('data/sample-data.json')
        .then(response => response.json())
        .then(data => renderChart(data))
        .catch(error => console.error('Error loading data:', error));
});

function renderChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Sample Data',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
