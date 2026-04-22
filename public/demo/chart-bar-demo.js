// public/demo/chart-bar-demo.js
// Chart.js v4 compatible. Expects window.Chart to exist (set in resources/js/app.js).

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myBarChart');
    if (!canvas) return;

    if (typeof window.Chart !== 'function') {
        console.error('[chart-bar-demo] window.Chart is not defined. Load app.js before this file.');
        return;
    }

    new window.Chart(canvas, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                backgroundColor: 'rgba(2,117,216,1)',
                borderColor: 'rgba(2,117,216,1)',
                data: [4215, 5312, 6251, 7841, 9821, 14984],
            }],
        },
        options: {
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { maxTicksLimit: 6 },
                },
                y: {
                    min: 0,
                    max: 15000,
                    ticks: { maxTicksLimit: 5 },
                    grid: { display: true },
                },
            },
            plugins: {
                legend: { display: false },
            },
        },
    });
});
