// public/demo/chart-area-demo.js
// Chart.js v4 compatible. Expects window.Chart to exist (set in resources/js/app.js).

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myAreaChart');
    if (!canvas) return;

    if (typeof window.Chart !== 'function') {
        console.error('[chart-area-demo] window.Chart is not defined. Load app.js before this file.');
        return;
    }

    // Global defaults (optional)
    window.Chart.defaults.font.family = '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    window.Chart.defaults.color = '#292b2c';

    new window.Chart(canvas, {
        type: 'line',
        data: {
            labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7',
                'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13'],
            datasets: [{
                label: 'Sessions',
                data: [10000, 30162, 26263, 18394, 18287, 28682, 31274,
                    33259, 25849, 24159, 32651, 31984, 38451],
                lineTension: 0.3,
                backgroundColor: 'rgba(2, 117, 216, 0.2)',
                borderColor: 'rgba(2, 117, 216, 1)',
                pointRadius: 5,
                pointBackgroundColor: 'rgba(2, 117, 216, 1)',
                pointBorderColor: 'rgba(255, 255, 255, 0.8)',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(2, 117, 216, 1)',
                pointHitRadius: 50,
                pointBorderWidth: 2,
                fill: true,
            }],
        },
        options: {
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { maxTicksLimit: 7 },
                },
                y: {
                    min: 0,
                    max: 40000,
                    ticks: { maxTicksLimit: 5 },
                    grid: { color: 'rgba(0, 0, 0, .125)' },
                },
            },
            plugins: {
                legend: { display: false },
            },
        },
    });
});
